import React from 'react'

export default function Dados(props){
    const textoDestaque = {
        color:'darkblue',
        fontSize:'2em'
    }
    
    return(
        <p style={textoDestaque}>Canal: {props.canal}</p>
       
    )
}