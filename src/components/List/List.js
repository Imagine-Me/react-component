import React from 'react';
import H3 from './H3';

const list = (props) => {
    const array_list = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"]
    // JavaScript way
    // const render_list = array_list.map((name, index) => <H3 key={index}>Hello {name}</H3>)
    // return <div>
    //     {render_list}
    // </div>


    //JSX way
    return <div>
        {array_list.map((name,index) => <H3 key={index}>Hello {name}</H3>)}
    </div>

}

export default list;