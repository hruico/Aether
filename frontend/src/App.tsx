import './App.css'
import Navbar from './components/Header/navbar/Navbar'
import SearchBar from './components/Header/searchBar/SearchBar'
import Logo from './components/Header/logo/Logo'
import Inbox from './components/main/inbox/Inbox'
import Sidebar from './components/main/sidebar/Sidebar'
import MenuPopup from './components/main/sidebar/popups/MenuPopup'

import { useState } from 'react'

function App() {

  const [menuPopup, setMenuPopup] = useState(false)

  return (
    <>
      <header>
        <Logo />
        <SearchBar />
        <Navbar />
      </header>
      <main>
        <Sidebar onClickPopup={() => setMenuPopup(!menuPopup)} />
        {menuPopup && <MenuPopup />}
        <Inbox />
      </main>
    </>
  )
}

export default App
