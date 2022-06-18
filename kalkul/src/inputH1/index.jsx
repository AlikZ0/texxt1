import React, { Children } from "react";
import "./slyle.css"

class InputH1 extends React.Component {
    

    state = {
  
        testValue:""
    }
    

    foo1 = (e) => {
       return this.setState({ testValue: e.target.value });
       console.log(111);
    }

    render() {
        return <div className="black ">
           
            <input  value={this.state.testValue} onChange={this.foo1} />
            
            <h1>{this.state.testValue}</h1>
            
            {/* <input type="number" value={this.state.numberValue} onChange={this.foo} /> */}
            
        </div>
    }
}




export default InputH1 
