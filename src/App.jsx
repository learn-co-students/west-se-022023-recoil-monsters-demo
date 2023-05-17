import { useState } from 'react'
import './App.css'
import HordeSize from './components/HordeSize'
import MonsterBrowser from './components/MonsterBrowser'  
import Filters from './components/Filters'

function App() {

  return (
    <>
     <header>
      <h1>Horde Assembly</h1>
     </header>
     <HordeSize />
     <Filters />
     <MonsterBrowser/>
    </>
  )
}

export default App
