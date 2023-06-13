import React, {useState} from 'react'
import './App.css'
import Notas from './componentes/aula16-17/Notas.js'
import Resultado from './componentes/aula16-17/Resultado.js'

/*aula sobre children concluida*/

const App = ()=>{ 

  const [not1, setNota1] = useState(0)
  const [not2, setNota2] = useState(0)
  const [not3, setNota3] = useState(0)
  const [not4, setNota4] = useState(0)
  const [not5, setNota5] = useState(0)
  
  const [notas, setNotas] = useState({'not1':'0', 'not2':'0', 'not3':'0', 'not4':'0', 'not5':'0'})

  const random = (e) => {
    let elementos = {...notas}
    console.log(elementos)
    elementos[e.target.getAttribute('name')] = e.target.value
    setNotas(elementos)
    
  }
  
  

  return(
    <>
    <Notas nNota = {1} name = {'not1'} nota = {notas.not1} state = {random} />
    <Notas nNota = {2} name = {'not2'} nota = {notas.not2} state = {random} />
    <Notas nNota = {3} name = {'not3'} nota = {notas.not3} state = {random} />
    <Notas nNota = {4} name = {'not4'} nota = {notas.not4} state = {random} />
    <Notas nNota = {5} name = {'not5'} nota = {notas.not5} state = {random} />
    <Resultado nota1 = {notas.not1} nota2 = {notas.not2} nota3 = {notas.not3} nota4 = {notas.not4} nota5 = {notas.not5}/>
    </>
  )
}

export default App