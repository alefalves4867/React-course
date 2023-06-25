import React from "react";

import Style from './styleC.css'

export default function A33Calculadora(props){
    const teclasNum = ['C', 'ב', '%', '/', '7', '8', '9', 'X','4', '5', '6','-', '1', '2', '3', '+',  'א', '0', '.','=']
    const [currentOperation, setCOP] = props.useState(0)
    const [previousOperation, setPOP] = props.useState(0)
    const [operation, setOp] = props.useState(true)

    const display = (COP, POP)=>{
        return(
            <div id = 'display'>
                <div id='currentOperation'>
                    {COP}
                </div>
                <div id='previousOperation'>
                    {POP}
                </div>
            </div>
        )
    }

    
    const sdms = (e)=>{
        switch (e){
            case '+':
                setCOP(currentOperation + e)
                setOp(false)
                break
            case '-':
                setCOP(currentOperation + e)
                setOp(false)
                break
            case '/':
                setCOP(currentOperation + e)
                setOp(false)
                break
            case 'X':
                setCOP(currentOperation + e)
                setOp(false)
                break
            case 'C':
                setCOP(currentOperation + e)
                setOp(false)
                break
            case 'ב':
                break
            case 'א':
                break
            case '=':
                setCOP(currentOperation + e)
                setOp(false)
                break
            case '%':
                setCOP(currentOperation + e)
                setOp(false)
                break
            case '.':
                setCOP(currentOperation + e)
                setOp(false)
                break
        }
    }
    
    const operacions = (e)=>{
        
        if(!isNaN(e) && operation){
            
            setCOP(e)
        } else {
            
        }

        if(isNaN(e) && !isNaN(currentOperation) && currentOperation > 0){
            sdms(e)
        }
    }



    const teclasNOp = (e)=>{
        let teclasNop = teclasNum.map((e, i)=>{
            return(
                <>
                    <input type="button" class='button' onClick={(e)=>operacions(e.target.value)} value={e}/>
                </>
            )
        })
        return teclasNop
    }




    
    
    

    const f_Teclas = ()=>{
        return(
            <div id='teatron'>
                <div id='calc'>
                    {display(currentOperation, previousOperation)}
                    <div id='teclasC'>
                        {teclasNOp()}
                    </div>
                    

                </div>
            </div>
        )
    }



    return(
        <>
            {f_Teclas()}

        </>
    )
}