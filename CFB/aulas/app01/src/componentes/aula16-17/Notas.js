import React, {useState} from 'react'

export default function Notas(p){


    

    return(
        <>
        

        <label for='notas'>Digite a sua {p.nNota}°</label>
        <input type='number' id='notas' onChange={(e)=> p.state(e.target.value)} style={{display: 'flex', fontSize: '18px'}} value={p.nota} min={0}></input>
        
        </>
    )
}