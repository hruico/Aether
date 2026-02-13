import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-about navbar-icons">
                <a href="">
                    <img src="/navbar/info.svg" alt="" />
                </a>
            </div>
            <div className="navbar-ai-icon navbar-icons">
                <a href="">
                    <img src="/navbar/ai-icon.svg" alt="" />
                </a>
            </div>
            <div className="navbar-settings navbar-icons">
                <a href="">
                    <img src="/navbar/settings.svg" alt="" />
                </a>
            </div>
            <div className="navbar-account navbar-icons">
                <a href="">
                    <img src="/navbar/user.svg" alt="" />
                </a>
            </div>
        </div>
    )
}