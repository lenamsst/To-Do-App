import React from 'react';


function List(props) {

    function deleteItem(item) {
        console.log(item)
    }

    return (<ul>
             {props.items.map(item => <li key={item.id}>
                 {item.text}
                 <button onClick={() => {props.onItemDeleted(item) }}><img alt="delete" src="./assets/bin.png"></img></button>
                 </li>)}
              
            </ul>)

}


export default List;