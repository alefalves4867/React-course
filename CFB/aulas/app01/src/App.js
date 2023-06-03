import React from 'react'
import './App.css'



const App = ()=>{
  const carros = ['SUV', 'Golf', 'Meseit', 'Mekhonit']
  const lista = carros.map((e)=>{
    return(
      <>
      <div>{e}</div>
      <p>-----</p>
      </>
    )
    
  })

  return(
    
  )
}

export default App