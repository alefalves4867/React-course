import React from 'react'

export default function Relogio(){
    let hora = new Date().toLocaleTimeString()
    
   

    return(
        <p>Hora: {hora}</p>
    )
}