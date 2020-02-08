import React, { Component } from 'react'

class H3 extends Component {

    // value = "H3 clicked"

    //Initial
    // clickHandler = () => {
    //     console.log("H3 is clicked")
    // }

    // accessing event
    // clickHandler = (event) => {
    //     console.log(event)
    // }

    // Passing values
    clickHandler = (color) => {
        console.log(color)
    }


    // Normal method
    // clickHandler() {
    //     console.log(this.value)
    // }

    render() {
        // return <h3 onClick={this.clickHandler} style={{ color: this.props.color}}>
        //     {this.props.children}
        // </h3>
        // return <h3 onClick={this.clickHandler.bind(this,this.props.color)} style={{ color: this.props.color}}>
        //     {this.props.children}
        // </h3>
        return <h3 onClick={() => this.clickHandler(this.props.color)} style={{ color: this.props.color }}>
            {this.props.children}
        </h3>
    }
}

export default H3;