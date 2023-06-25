import React from "react";  

export default function A30Peso(props){


    const Tabela = ()=>{
        return(
            <table border='2' style={{borderCollapse:'collapse', textAlign:'center', margin:'auto'}}>
                <thead>
                    <tr>
                        <th>
                            Classificação
                        </th>
                        <th>
                            IMC
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Abaixo do Peso
                        </td>
                        <td>
                            Abaixo de 18.5
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Peso Normal
                        </td>
                        <td>
                            Entre 18.5 e 24.9
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sobrepeso
                        </td>
                        <td>
                            Entre 25 e 29.9
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Obesidade Grau I
                        </td>
                        <td>
                            Entre 30 e 34.5
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Obesidade Grau II
                        </td>
                        <td>
                            Entre 35 e 39.9
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Obesidade Grau III ou Mórbida
                        </td>
                        <td>
                            Maior que 40
                        </td>
                    </tr>
                </tbody>


            </table>   
        )
    }


    const Calcular= (peso, altura)=>{
        let resultado = 0
        resultado = ((peso/altura**2) === NaN ? 0: (peso/altura**2))
        return (+resultado == NaN ? 0: resultado)
    }
    const pesoAltura = ()=>{

        const [peso, setPeso]=props.useState(0)
        const [altura, setAltura]=props.useState(0)
        return(
            <div>
                <label>Informe seu peso:</label>
                <input value={peso} type = 'number' onChange={(e)=> setPeso(e.target.value)}/>
                <label>Informe sua altura:</label>
                <input value={altura} type = 'number' onChange={(e)=> setAltura(e.target.value)}/>
                <button>Calcular</button>

                <label>Resultado:{(Calcular(peso, altura) == Infinity) ? '0': (Calcular(peso, altura)).toFixed(2)}</label>
            </div>
        )
    }
    return(
        <>
        <div style={{marginTop:'2rem', width:'67%', margin:'auto'}}>
            {pesoAltura()}
            {Tabela()}
        </div>
        
        
        </>
    )

}