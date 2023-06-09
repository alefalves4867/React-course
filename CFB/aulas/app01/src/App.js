import React, {useState} from 'react'
import './App.css'
import Notas from './componentes/aula16-17/Notas.js'
import Resultado from './componentes/aula16-17/Resultado.js'


const App = ()=>{ 

  let a = '0'
  let b = '0'
  let c = '0'
  let d = '0'
  let e = '0'
  
  let nots = {a, b, c, d, e}

  return(
    <>
    <Notas nNota = {1} state = {useState} value = {a}/>
    <Notas nNota = {2} state = {useState} value = {b}/>
    <Notas nNota = {3} state = {useState} value = {c}/>
    <Notas nNota = {4} state = {useState} value = {d}/>
    <Notas nNota = {5} state = {useState} value = {e}/>
    <Resultado nota1 = {a} />
    </>
  )
}

export default App