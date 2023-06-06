import React from 'react'

export default function aula16(prop){
    /*const useState1 = prop.state*/
    const [not1, setNota1] = prop.state(0)
    const [not2, setNota2] = prop.state(0)
    const [not3, setNota3] = prop.state(0)
    const [not4, setNota4] = prop.state(0)

    return(

        <>
        <p>Nota1: {not1}</p>
        <p>Nota2: {not2}</p>
        <p>Nota3: {not3}</p>
        <p>Nota4: {not4}</p>

        <p>Resultado: {not1 + not2 + not3 + not4}</p>
        </>
    )
}