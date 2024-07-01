import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PropertySearchBox from './components/PropertySearchBox'
import OurMainFocus from './components/OurMainFocus'
import BuildingAminities from './components/BuildingAminities'
import DropDown from './components/DropDown'

function App() {

  return (
    <>
    <div>
     <HeroSection/>
     <div className='py-8 bg-slate-100'>
     <OurMainFocus/>
     </div>
     <div className='py-8 bg-slate-100'>
     <DropDown/>
     <BuildingAminities/>
     </div>
     </div>
    </>
  )
}

export default App
