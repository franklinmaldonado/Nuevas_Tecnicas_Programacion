import React from 'react';

class MiForm extends React.Component{

    state = {
        color:"",
        nombre:""
    }


    myOnSubmit=(evn)=>{
        evn.preventDefault();
        console.log("Enviar",this.state.color,"  -  ", this.state.nombre);
        this.props.añadirConfiguracion(this.state.color, this.state.nombre);
    }

    myOnChange=(env)=>{
        console.log([env.target.name]," - ", env.target.value)
        this.setState({
            [env.target.name]:env.target.value
        })
    }
    render(){
        console.log(this.props);
        return (
            <form onSubmit={this.myOnSubmit} >
                <input name="color"
                type="text" 
                placeholder="Ingrese su edad" 
                onChange={this.myOnChange} 
                value={this.state.color} />
                <br />
                <br />
                <input name="nombre"
                type="text" 
                placeholder="Ingrese su Nombre y Apellido" 
                onChange={this.myOnChange} 
                value={this.state.nombre} />
                <br />
                <br />
                <input type="submit" />
            </form>
        )
    }
}

export default MiForm