import { useState } from 'react'
import './AiChat.css'

export default function AiChat() {
    const [cnvx, setCnvx] = useState<string[]>([])
    const [userText, setUserText] = useState('')

    function saveCnvx(e: any) {
        e.preventDefault()
        setCnvx([...cnvx, userText])


        setUserText('')
    }

    return (
        <div className="ai-popup-chat">
            <div className="conversations">
                {cnvx.map((cvn: string) => {
                    return <span className='user-chats'>{cvn}</span>
                })}
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