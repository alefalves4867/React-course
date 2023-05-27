import React from 'react'
import './App.css'
import Hd1 from './componentes/Header1.js'
import Dados from './componentes/Dados.js'
import corpo from './componentes/Body.js'


const App = ()=>{
  return(
    <>
    <Hd1/>
    <Dados canal={corpo()}/>
    </>
  )
}

export default App