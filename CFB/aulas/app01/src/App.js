import React from 'react'
import './App.css'
import Hd1 from './componentes/Header1.js'
import Dados from './componentes/Dados.js'
import Corpo from './componentes/Body.js'
import Hora from './componentes/Relogio.js'

const App = ()=>{
  

  return(
    <>
    <Hd1/>
    <Dados canal={Corpo()}/>

    <Hora/>
    </>
  )
}

export default App