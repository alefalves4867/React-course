import React from 'react'

export default function aula14(props){
    const [name, setName] = props.useState({'nome':'', 'dia':''})

    return(
        <>
        <h1>שלום עליכם</h1>

        <input type='text' name='fnome' value={name.nome} onChange={(e)=>setName({'nome':e.target.value})}/>

        <p>Nome digitado: {name.nome}</p>
        
        </>
    )

}


