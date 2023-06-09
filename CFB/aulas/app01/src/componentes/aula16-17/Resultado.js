import React from 'react'

export default function Resultado(p){

    


    let resultado = parseFloat(p.notas.nots.a)  + parseFloat(p.notas.nots.b)  + parseFloat(notas.nots.c) + parseFloat(p.notas.nots.d) + parseFloat(p.notas.nots.e)

   

    const color = (rr) =>{
        
        if(rr > 60){
            let estilo = {

                fontSize: '25px',
                color: 'green',
            }
            return estilo
        } else {
            let estilo = {

                fontSize: '25px',
                color: 'red',
            }
            return estilo
        }

        
        

    }


    
    return(

        <>
        <p>Seu resultado é: {resultado}</p>
        <p style={color(resultado)}>{resultado > 60 ? 'APROVADO!' : 'REPROVADO!'}</p>
        </>

    )

      
    

}