import React from 'react';

const h3 = (props) => {
    console.log(props.key)
    return <h3 style={{ color: props.color}}>{props.children}</h3>
}

export default h3;