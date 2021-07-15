import React from 'react';

class Elemento extends React.Component{
    
    eliminarElemento=()=>{
        this.props.eliminarElementoPractica1(this.props.elem.id);
    }

    render(){
        const {elem}= this.props;
        console.log(this.props);
        return <div> 
        <textarea style= {elem.color} onClick={this.eliminarElemento}>
            {elem.nombre}
        </textarea>
        </div>
        
    }
    
}

export default Elemento;