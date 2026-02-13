import './Logo.css'

export default function Logo() {
    return (
        <div className="header-logo">
            <div className="logo-wrapper">
                <div className="logo-image logo-icons">
                    <a href="">
                        <img src="/Logo/hotjar.svg" alt="" />
                    </a>
                </div>
                <h1 className="header-logo-text">Aether</h1>
            </div>
        </div>
    )
}