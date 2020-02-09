import React from 'react';


const h3 = (props) => {
    // const clickHandler = () => {
    //     console.log("h3 clicked")
    // }

    // const clickHandler = (event) => {
    //     console.log(event)
    // }
    const clickHandler = (color) => {
        console.log(color)
    }


    // return <h3 onClick={clickHandler} style={{ color: props.color}}>{props.children}</h3>
    // return <h3 onClick={clickHandler.bind(this,props.color)} style={{ color: props.color}}>{props.children}</h3>
    return <h3 onClick={() => clickHandler(props.color)} style={{ color: props.color}}>{props.children}</h3>
}

export default h3;