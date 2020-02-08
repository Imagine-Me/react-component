import React from 'react';

const clickHandler = () => {
    console.log("h3 clicked")
}

const h3 = (props) => {
    // const clickHandler = () => {
    //     console.log("h3 clicked")
    // }

    return <h3 onClick={clickHandler} style={{ color: props.color}}>{props.children}</h3>
}

export default h3;