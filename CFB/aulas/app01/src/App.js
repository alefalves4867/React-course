import React,{useState} from 'react'
import './App.css'
import State from './componentes/State.js'


const App = ()=>{
  const [num,setNum]=useState(0)

  return(
    <>
    <State setNum = {setNum} num = {num}/>
    </>
  )
}

export default App