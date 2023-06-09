import React, {useState} from 'react'
import './App.css'
import Notas from './componentes/aula16-17/Notas.js'
import Resultado from './componentes/aula16-17/Resultado.js'


const App = ()=>{ 

  const [not1, setNota1] = useState(0)
  const [not2, setNota2] = useState(0)
  const [not3, setNota3] = useState(0)
  const [not4, setNota4] = useState(0)
  const [not5, setNota5] = useState(0)
  
  

  return(
    <>
    <Notas nNota = {1} nota = {not1} state = {setNota1} />
    <Notas nNota = {2} nota = {not2} state = {setNota2} />
    <Notas nNota = {3} nota = {not3} state = {setNota3} />
    <Notas nNota = {4} nota = {not4} state = {setNota4} />
    <Notas nNota = {5} nota = {not5} state = {setNota5} />
    <Resultado nota1 = {not1} nota2 = {not2} nota3 = {not3} nota4 = {not4} nota5 = {not5}/>
    </>
  )
}

export default App