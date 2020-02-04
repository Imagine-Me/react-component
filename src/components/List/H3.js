import React,{Component} from 'react'

class H3 extends Component{
    render(){
        return <h3 style={{ color: this.props.color}}>
            {this.props.children}
        </h3>
    }
}

export default H3;