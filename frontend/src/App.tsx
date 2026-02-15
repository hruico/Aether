import './App.css'
import Navbar from './components/Header/navbar/Navbar'
import SearchBar from './components/Header/searchBar/SearchBar'
import Logo from './components/Header/logo/Logo'
import Inbox from './components/main/inbox/Inbox'
import Sidebar from './components/main/sidebar/Sidebar'
import MenuPopup from './components/main/sidebar/popups/MenuPopup'
import AiChat from './components/main/AI/AiChat'

import { useState } from 'react'

function App() {

  const [menuPopup, setMenuPopup] = useState(false)
  const [aiPopup, setAiPopup] = useState(false)

  return (
    <>
      <header>
        <Logo />
        <SearchBar />
        <Navbar onClickAiPopup={() => setAiPopup(!aiPopup)} />
      </header>
      <main>
        <Sidebar onClickPopup={() => setMenuPopup(!menuPopup)} />
        {menuPopup && <MenuPopup />}
        <Inbox />
        {aiPopup && <AiChat />}
      </main>
    </>
  )
}

export default App
