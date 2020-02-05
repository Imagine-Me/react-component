import React from 'react';
import H3 from './H3';

const list = (props) => {
    const array_list =[]
    array_list.push(<H3 key={1} color="red" >Hello</H3>)
    array_list.push(<H3 key={2} color="green">There</H3>)

    return array_list
}

export default list;