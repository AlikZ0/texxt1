import React from "react";
import "./slyle.css"

class InputG extends React.Component {

    state = {
        number: 0,
        numberValue: 0
    }
    increment = () => {
        if (this.state.numberValue) {
            this.setState({ number: this.state.number + +this.state.numberValue })
        } else {
            this.setState({ number: ++this.state.number })
        }
    }
    decrement = () => {
        if (this.state.numberValue) {
            this.setState({ number: this.state.number - +this.state.numberValue })
        } else {
            this.setState({ number: --this.state.number })
        }
    }
    foo = (e) => {
        this.setState({ numberValue: e.target.value })

    }
    render() {
        return <div>
            <input type="number" value={this.state.numberValue} onChange={this.foo} />
            <span className="G-span" onClick={this.decrement}>-</span>
            <span className="G-span">{this.state.number}</span>
            <span className="G-span" onClick={this.increment}>+</span>
        </div>
    }
}




export default InputG 
