import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UsuarioEntrada from './UsuarioEntrada';

class UsuarioSaida extends Component {
constructor(props){
        super(props);
	
        this.state = {
            nome:"Convidado",
        };
       
    }

render(props){


  return (
	
    <div className="UsuarioSaida">
      <p>Olá {this.state.nome},</p>
      <p>Seja bem vindo!</p>
    </div>
  );
}


}
export default UsuarioSaida;
