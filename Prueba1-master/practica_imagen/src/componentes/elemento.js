import React from 'react';

class Elemento extends React.Component{
    
    

    render(){
        const {elem}= this.props;
        console.log(this.props);
        return <div> 
        <textarea style= {elem.color} >
            {elem.nombre}
        </textarea>
        </div>
        
    }
    
}

export default Elemento;