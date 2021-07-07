import React from 'react';
import './App.css';


/*function IngresarDatos(props){
  return (
  <div>
    <h3> {props.nombre}</h3>
  </div>)
}*/

/*const IngresarDatos = (props)=>{
  return (
    <div>
      <h3> {props.nombre}</h3>
    </div>)
}*/


class IngresarDatos extends React.Component {

  state={
    bandera : true
  }

  cambiarEstado = ()=>{
    this.setState({bandera:!this.state.bandera});
  }

  render(){
    if(this.state.bandera){
      return (<div>
        <h3> {this.props.id}</h3>
        <button onClick={this.cambiarEstado} >Activar</button>
      </div>)
    }else{
      return <div><h2>
        <font color="red">INSTITUTO TECNOLOGICO QUITO</font>
        <img src="logo192.png"></img>
        </h2>
        <button onClick={this.cambiarEstado} >
        Desactivar</button></div>
    }
    
  }

}

class IngresarDatos1 extends React.Component {

  state={
    bandera1 : true
  }

  cambiarEstado1 = ()=>{
    this.setState({bandera1:!this.state.bandera1});
  }

  render(){
    if(this.state.bandera1){
      return (<div>
        <h3> {this.props.id1}</h3>
        <button onClick={this.cambiarEstado1} >Activar</button>
      </div>)
    }else{
      return <div><h2>
        <font color="blue">Sexto Nivel</font>
        <img src="logo512.png"></img>
        </h2>
        <button onClick={this.cambiarEstado1} >
        Desactivar</button></div>
    }
    
  }

}

class IngresarDatos2 extends React.Component {

  state={
    bandera2 : true
  }

  cambiarEstado1 = ()=>{
    this.setState({bandera2:!this.state.bandera2});
  }

  render(){
    if(this.state.bandera2){
      return (<div>
        <h3> {this.props.id2}</h3>
        <button onClick={this.cambiarEstado1} >Activar</button>
      </div>)
    }else{
      return <div><h2>
        <font color="green">Jornada Diurna</font>
        <img src="logo193.png"></img>
        </h2>
        <button onClick={this.cambiarEstado1} >
        Desactivar</button></div>
    }
    
  }

}
function App() {
  
  return (
  <div id="principal">
    <h2 id="titulo" > 
      <IngresarDatos id="ITQ" />
      
    </h2>
    <h2 id1="nombre" > 
      <IngresarDatos1 id1="Franklin Maldonado" />
    </h2>
    <h2 id2="materia"> 
      <IngresarDatos2 id2="Nuevas Técnicas de Programación" />
    </h2>
  </div>);
}

export default App;
