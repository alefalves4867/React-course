import React from "react"
import Globais from './Globais'


export default function A27(props){
    const [channel, setChannel] = props.useState(Globais.channel)
    const [home, setHome] = props.useState(Globais.home)
    const gravar = (elem)=>{
        if(elem == 'channel'){
            Globais.channel = channel
        } else {
            Globais.home = home
        }
    }


    return(
        <>

        <br/>
        Channel: {Globais.channel}<br/>
        Home: {Globais.home}<br/>
        <input type="text" value={channel} onChange={(e)=>setChannel(e.target.value)}></input>
        <input type="text" value={home} onChange={(e)=>setHome(e.target.value)}></input>

        <input type='button' onClick={()=>gravar('channel')} value='Update Channel'></input>
        <input type='button' onClick={()=>gravar('home')} value='Update Home'></input>
        </>
    )
}