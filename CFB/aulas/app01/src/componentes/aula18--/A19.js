import React from "react";


export default function A19(props){
    
    const [nome, setNome] = props.useState()


    const Adicionar = (chave, valor) => {
        localStorage.setItem(chave, valor)
    }

    const Exibir = (chave) => {
        alert(localStorage.getItem(chave))
    }

    const Apagar = (chave) => {
        localStorage.removeItem(chave)
    }

    return(
        <>
            <p>
                What country you want to live?
            </p>
            <input type="text" placeholder="מדינת" value={nome} onChange={(e)=> setNome(e.target.value)}></input><br/>

            <input type="button" value="Adicionar" onClick={()=>Adicionar('shem', nome)}></input>

            <input type="button" value="Exibir" onClick={()=>Exibir('shem')}></input>
            
            <input type="button" value="Apagar" onClick={()=>Apagar('shem')}></input>
        
        </>
    )
}