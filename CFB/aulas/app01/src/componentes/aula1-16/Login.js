import React,{useState} from 'react'

export default function Login(){
    const msglogoff=()=>{
        return 'Favor Logar'
    }

    const[log, logs] = useState(false)

    const cumprimento = ()=>{
        const hora = new Date().getHours()
        if(hora >= 0 && hora < 13){
            return <p>בוקר טוב</p>
        } else if(hora >=13 && hora < 18) {
            return <p>ערב טוב</p>
        } else{
            return <p>לילה טוב</p>
        }
    }

    const msglogoin = ()=>{
        return 'Logado'
    }

    return (
        <>
        {cumprimento()}
        <p>{log?msglogoin():msglogoff()}</p>
        <button onClick={()=> logs(!log)}>{log?'LogoOFF':'Login'}</button>
        </>
    )

}