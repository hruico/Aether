import './Sidebar.css'

export default function Sidebar(props: any) {
    return (
        <div className="sidebar">
            <div className="sidebar-menu-burger sidebar-icons" onClick={props.onClickPopup}>
                <a href="#" >
                    <img src="/sidebar/menu-burger.svg" alt="" />
                </a>
            </div>
            <div className="sidebar-mail-icon sidebar-icons">
                <a href="" className='sidebar-options-wrapper'>
                    <img src="/sidebar/envelope.svg" alt="" />
                    <span>Mail</span>
                </a>
            </div>
            <div className="sidebar-chat-icon sidebar-icons">
                <a href="" className='sidebar-options-wrapper'>
                    <img src="/sidebar/messages.svg" alt="" />
                    <span>Chat</span>
                </a>
            </div>
            <div className="sidebar-meet-icon sidebar-icons">
                <a href="" className='sidebar-options-wrapper'>
                    <img src="/sidebar/video-camera-alt.svg" alt="" />
                    <span>Meet</span>
                </a>
            </div>

        </div>
    )
}