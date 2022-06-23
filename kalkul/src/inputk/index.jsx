import React, { Children } from "react";
import "./style.css"

class InputK extends React.Component {


    state = {

        ttile: "",
        description: "",
        ttile: "",
        color: "red",
        ramgeValue: "",
        text: "",
        


    }
    
    // const = obj ={
    //     fontSize:this.state.ramgeValue
    // }

    foo = (e) => {
        console.log(this.state.ramgeValue);
        return this.setState({ text: e.target.value })
    }

    foo2 = (e) => {
        
        return this.setState({ ramgeValue: e.target.value })

    }
    lite=(e)=>{
        return this.setState({ color: e.target.value })
    }

    render() {
       
        return <div className="G-contein  " >
            <div className="gorciqner">

                <input type="range"
                    min={5}
                    max={77}
                    value={this.state.ramgeValue}
                    onChange={this.foo2}
                />
                <input type="text"
                    value={this.state.text}
                    onChange={this.foo}
                />
                <input type="text" 
                       name="color"
                       value={this.state.color}
                       onChange={this.lite}
                />
            </div>
            <div className="ardyunq"  style={{fontSize:this.state.ramgeValue +"px"}}>
            <h1  style={{background:this.state.color}}
                 
                 
            >{this.state.text}</h1>
            <h1 style={{fontSize:this.state.ramgeValue +"px"}}>{this.state.ramgeValue}</h1>
          
        </div>

        {/* / {this.state.ramgeValue? 55<p>this.state.ramgeValue<p/>: "null"} */ }

        {/* <input type="number" value={this.state.numberValue} onChange={this.foo} /> */ }

        </div >
    }
}




export default InputK