import React, {useState} from 'react'
import './Todo.css'
import List from './components/List'
import TodoForm from './components/TodoForm'


function Todo() {

    const [items, setItems] = useState([]);

    function onAddItem(item){
        setItems([...items, item])
    }
 

    return (<div className="container">
        <h1>Todo</h1>
       
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List items={items}></List>

        </div>)

}




export default Todo