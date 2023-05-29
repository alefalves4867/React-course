import React from "react";


export default function State(props){

    const plus = ()=>{
        props.setNum(props.num+10)
    }


    return(
        <>
        <p>O número é: {props.num}</p>
        <input type='button' value='+10' onClick={plus}/>
        </>
        
    )
}