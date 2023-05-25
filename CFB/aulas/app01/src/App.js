import React from 'react'
import './App.css'
import Hd1 from './componentes/Header1.js'
import Dados from './componentes/Dados.js'


const channel = 'Tzion Brazil'
const App = ()=>{
  return(
    <>
    <Hd1/>
    <Dados canal='Tzion Brazil'/>
    </>
  )
}

export default App