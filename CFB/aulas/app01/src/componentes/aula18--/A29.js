import React from "react";

const carros = [
    {
        categoria:"Esporte", 
        preco: 100000, 
        modelo: "Golf GTI"
    },{
        categoria:"Esporte",
        preco:250000,
        modelo: "Camaro"
    },{
        categoria:"SUV",
        preco:100000,
        modelo:"HRV"
    },{
        categoria:"SUV",
        preco:120000,
        modelo:"T-Cross"
    },{
        categoria:"Utilitario",
        preco:125000,
        modelo:"Hilux"
    },{
        categoria:"Utilitario",
        preco:90000,
        modelo:"Ranger"
    }
]




const linhas = (cat)=>{
    const li = []
    carros.map((carro, indice) =>{
        if(carro.categoria.toUpperCase().includes(cat.toUpperCase()) || cat == ''){
            li.push(
                <tr>
                    <td>
                        {carro.categoria}
                    </td>
                    <td>
                        {carro.preco}
                    </td>
                    <td>
                        {carro.modelo}
                    </td>
                </tr>
            )
        }
    })

    return li
    
}


const TabelaCarros = (cat) =>{
    return(
        <>
            <table border='1' style={{borderCollapse:'collapse'}}>
                <thead>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Modelo</th>
                </thead>
                <tbody>
                    {linhas(cat)}
                </tbody>
            </table>
        
        </>
    )
}

const pesquisar = (cat, scat) =>{
    return(
        <div>
            <label>Digite uma categoria</label>
            <input type="text" value={cat} onChange={(e)=> scat(e.target.value)}></input>
        </div>
    )
}



export default function A29(props){

    const [categoria, setCategoria] = props.useState('')
    return(
        <>
            {pesquisar(categoria, setCategoria)}
            {TabelaCarros(categoria)}
        
        </>
    )
}