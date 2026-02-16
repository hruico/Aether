import { useEffect, useState } from 'react'
import './AiChat.css'
import Groq from "groq-sdk";
const groq = new Groq({
    apiKey: 'YOUR_API_KEY',
    dangerouslyAllowBrowser: true
});

interface Message {
    role: 'user' | 'assistant' | 'system' | 'model'; // Limit roles to these strings
    content: string;
}

export default function AiChat() {
    const [cnvx, setCnvx] = useState<Message[] | null>([]);
    const [userText, setUserText] = useState('');
    const [modelResponse, setModelResponse] = useState<string | null>(null);

    async function saveCnvx(e: React.FormEvent) { // Changed 'any' to specific event type
        e.preventDefault();

        // Use a local constant for userText to ensure stability
        const currentInput = userText;
        setCnvx(prev => [...(prev || []), { role: 'user', content: currentInput }]);
        setUserText('');

        try {
            const completion = await groq.chat.completions.create({
                model: "llama-3.1-8b-instant",
                messages: [{ role: "system", content: "You are a friendly conversation chatbot. You must answer is 10 to 20 words" }, { role: "user", content: currentInput }],
            });

            // 2. Extract the response to a local variable
            const data = completion.choices[0]?.message?.content || "";

            setModelResponse(data);

            // 3. IMPORTANT: Use 'data' directly here, NOT 'modelResponse'
            // This fixes the TypeScript 'null' check and the stale state bug
            setCnvx(prev => [...(prev || []), { role: 'model', content: data }]);

        } catch (error) {
            console.error("Groq API Error:", error);
        }
    }

    return (
        <div className="ai-popup-chat">
            <div className="conversations">
                {cnvx?.map(e => e.role === 'user' ? <div className='user-chats'><span>{e.content}</span></div> : <div className='model-answer'><span>{e.content}</span></div>)}
            </div>
            <div className="chat-interface">
                <form onSubmit={saveCnvx}>
                    <input type="text" placeholder='Ask anything...' value={userText} onChange={e => setUserText(e.target.value)} />
                </form>
                <div className="chat-options">
                    <button className='upload-file-btn'>
                        <p>+</p>
                    </button>
                    <div className="planning-option ai-chatbar-options">
                        <a href="#">
                            <img src="/aiInterface/down.svg" alt="" />
                            <span>Planning</span>
                        </a>
                    </div>
                    <div className="model-option ai-chatbar-options">
                        <a href="#">
                            <img src="/aiInterface/down.svg" alt="" />
                            <span>Model</span>
                        </a>
                    </div>
                    <div className='chatbar-endButtons'>
                        <button className='cnvx-sent-btn'>
                            <img src="/aiInterface/microphone.svg" alt="" />
                        </button>
                        <button onClick={saveCnvx} className='cnvx-sent-btn'>
                            <img src="/aiInterface/arrow-right.svg" alt="sent-btn" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )


}
