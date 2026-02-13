import './SearchBar.css'

export default function SearchBar() {
    return (
        <div className="header-searchbar">
            <div className="searchbar-search-icon ">
                <a href="">
                    <img src="/searchbar/search.svg" alt="" />
                </a>
            </div>
            <form action="" className='searchbar-form'>
                <input type="text" placeholder='Search mail' className='searchbar-searchbar' />
            </form>
            <div className="searchbar-settings-icon">
                <a href="">
                    <img src="/searchbar/settings-sliders.svg" alt="" />
                </a>
            </div>
        </div>
    )
}