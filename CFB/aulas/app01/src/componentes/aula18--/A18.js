import React from "react";

export default function A18(p){

    /* לא היום :( */

    const [a, upN] = p.useState(0)

    p.useEffect(
        ()=>{
        console.log('recarregada')
        document.title=a
        }
      )

    return(
        <>

        <p>Número: {a}</p>

        <button onClick={()=>upN(a+1)}>הנה</button>
        </>
    )
}