import React,{useState} from 'react'
import './App.css'
import State from './componentes/State.js'


const App = ()=>{
  const [num,setNum]=useState(0)

  const cancelar = (obj) => {
    return obj.preventDefault()
  }

  return(
    <>
    <State setNum = {setNum} num = {num}/>
    <a href='www.youtube.com' target='_blank' onClick={(e)=>cancelar(e)}>YT</a>
    </>
  )
}

export default App