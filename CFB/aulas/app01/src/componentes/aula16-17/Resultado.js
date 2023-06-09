import React from 'react'

export default function Resultado(p){

    
    let resultado = 0

    resultado = (parseFloat(p.nota1) + parseFloat(p.nota2) + parseFloat(p.nota3) + parseFloat(p.nota4) + parseFloat(p.nota5)) == NaN ? 0 : parseFloat(p.nota1) + parseFloat(p.nota2) + parseFloat(p.nota3) + parseFloat(p.nota4) + parseFloat(p.nota5)

   

    const color = (rr) =>{
        
        if(rr >= 60){
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
        <p style={color(resultado)}>{resultado >= 60 ? 'APROVADO!' : 'REPROVADO!'}</p>
        </>

    )

      
    

}