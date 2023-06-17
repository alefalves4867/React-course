import React from "react";
/*setInterval(() => {
            if(!(this.state.ligado)) {
                desacelerar()
            }
        }, 1000);*/
export default class A22 extends React.Component{
    constructor(props){
        super(props)

        this.nomeC = 'SUV'
        this.state={
           vel:0,
           ligado: false,
        }
        
    }

    


    ligDes(){
        this.setState({ligado: !this.state.ligado})
    }

    acelerar(ld){

        if(ld){
            this.setState(
                        (state, props)=>(
                            {vel: state.vel + props.vA}
                        )
                    )
        } else {

            return
        }

        

    }


    desacelerar(){

        if(this.state.vel > 0){
           this.setState(
            (state)=>(
                {vel: state.vel === 1 ? state.vel - 1 : state.vel - 2}
                
            )
        ) 
        } else {
            return
        }
        
        
    }

    componentDidMount() {

        /*
        
        O método componentDidMount é executado automaticamente logo após o componente ser montado e inserido no DOM. Ele é um bom lugar para realizar inicializações, configurações de assinaturas de eventos, solicitações de dados ou qualquer outra ação que precise ser executada quando o componente estiver pronto e visível na tela.
        
        */
        this.interval = setInterval(() => {
            if (!this.state.ligado) {
            this.desacelerar();
            }
        }, 1500);
    }
    
    componentWillUnmount() {

        /*
        
        O método componentWillUnmount é executado automaticamente antes do componente ser desmontado e removido do DOM. É um bom lugar para limpar quaisquer recursos, cancelar assinaturas de eventos, interromper animações ou qualquer outra ação que precise ser realizada antes de o componente ser removido da tela.
        
        */

        clearInterval(this.interval);
    }


    frear(){
        if(this.state.vel > 0){
            this.setState(
                (state)=>(
                    {vel: this.state.vel === 1 ? state.vel - 1 : state.vel - 10}
                )
            )
        } else {
            return
        }
        
    }
    
      
    render(){
        
        return(

            <>
            <p>Modelo: {this.nomeC}</p>
            <p>Velocidade: {this.state.vel} Km</p>
            <p>Ligado: {this.state.ligado ? 'Sim':'Não'}</p>
            <input type="button" onClick={()=>this.ligDes()} value={this.state.ligado ? 'Desligar': 'Ligar'}></input>

            <input type="button" onClick={()=>this.acelerar(this.state.ligado)} value={'Acelerar'}></input>
            <input type="button" onClick={()=>this.frear()} value={'Frear'}></input>
            </>
        )
    }
}