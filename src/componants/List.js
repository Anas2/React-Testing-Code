import React from 'react';
import Item from './Item';

function List({arr}) {
    
    const items = arr.map((item,i)=> <Item key={i} title={item} />)

    return (
        <div>
            
            {items}
        </div>
    );
}

export default List;