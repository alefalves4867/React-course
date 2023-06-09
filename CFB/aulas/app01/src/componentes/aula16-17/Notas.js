import React, {useState} from 'react'

export default function Notas(p){


    let [a, setNota] = useState(0)

    return(
        <>
        

        <label for='notas'>Digite a sua {p.nNota}°</label>
        <input type='number' id='notas' value={a} onChange={(e)=> setNota(e.target.value)} style={{display: 'flex', fontSize: '18px'}}></input>
        
        </>
    )
}