import './MenuPopup.css'
import { useState } from 'react'

export default function MenuPopup() {

    const [more, setMore] = useState(false)

    return (
        <div className="menu-popup">
            <button className='menuPopup-compose-btn'>
                <img src="/menuPopup/pencil.svg" alt="" />
                <span>Compose</span>
            </button>
            <div className="menu-options">
                <a href="#" className='menu-options-icons'>
                    <img src="/menuPopup/inbox-full.svg" alt="" />
                    <span>Inbox</span>
                </a>
                <a href="#" className='menu-options-icons'>
                    <img src="/menuPopup/star.svg" alt="" />
                    <span>Starred</span>
                </a>
                <a href="#" className='menu-options-icons'>
                    <img src="/menuPopup/clock-three.svg" alt="" />
                    <span>Snoozed</span>
                </a>
                <a href="#" className='menu-options-icons'>
                    <img src="/menuPopup/paper-plane-top.svg" alt="" />
                    <span>Sent</span>
                </a>
                <a href="#" className='menu-options-icons'>
                    <img src="/menuPopup/blueprint.svg" alt="" />
                    <span>Drafts</span>
                </a>
                <a href="#" className='menu-options-icons'>
                    <img src="/menuPopup/cart-arrow-down.svg" alt="" />
                    <span>Purchases</span>
                </a>
                <a href="#" className='menu-options-icons' onClick={() => setMore(!more)}>
                    {more ? <><img src="/menuPopup/menu-dots-vertical.svg" alt="" />
                        <span>More</span></> : <><img src="/menuPopup/menu-dots.svg" alt="" />
                        <span>Less</span></>}

                </a>

            </div>
        </div>
    )
}