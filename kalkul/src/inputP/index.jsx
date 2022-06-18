import React, { Children } from "react";
import "./slyle.css"

class InputP extends React.Component {
    co

    state = {
     
        testValue: "",
        test1Value: ""
    }
    increment = () => {
        if (this.state.numberValue) {
            this.setState({ number: this.state.number + +this.state.numberValue })
        } else {
            this.setState({ number: ++this.state.number })
        }
    }

    foo4 = () => {
        console.log(this.state.testValue );
        
        console.log(this.state.test1Value );

        
        this.setState({ testValue: this.state.test1Value })
        this.setState({ test1Value: this.state.testValue })
        
    }

    foo1 = (e) => {
        return this.setState({ testValue: e.target.value });
       console.log("33");
    }
    foo2 = (e) => {
        return this.setState({ test1Value: e.target.value });
       
    }

    render() {
        return <div className="red ">

            <input value={this.state.testValue} onChange={this.foo1} />


            <h1>{this.state.testValue}</h1>
            <button  onClick={this.foo4}>Click me </button><br/>
            <input value={this.state.test1Value} onChange={this.foo2} />


            <h1>{this.state.test1Value}</h1>

            {/* <input type="number" value={this.state.numberValue} onChange={this.foo} /> */}

        </div>
    }
}




export default InputP 
