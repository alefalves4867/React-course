import React from "react";

export default class A21 extends React.Component{
    constructor(props){
        super(props)
        

    }
    render(){
        return(
            <>
            <h1>Componentes de Classe</h1>
            <p style={{color: 'darkblue', fontSize: '2rem',}}>Canal: {this.props.channel}</p>
            <p style={{color: 'darkblue', fontSize: '2rem',}}>Name: {this.props.name}</p>
            </>
        )
    }
}