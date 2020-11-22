import React, {Component} from 'react';
import logo from './logo.svg';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';
import './App.css';

class App extends Component {
  render(){

	return (
    		<div className="App">
     			<p><UsuarioEntrada /></p>
			<p><UsuarioSaida /></p>
   		</div>
  		);
	}
}



export default App;

