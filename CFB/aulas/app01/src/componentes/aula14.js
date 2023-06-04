import React from 'react'

export default function aula14(props){
    const [name, setName] = props.useState('')

    return(
        <>
        <h1>שלום עליכם</h1>

        <input type='text' name='fnome' value={name} onChange={(e)=>setName(e.target.value)}/>

        <p>Nome digitado: {name}</p>
        </>
    )

}


