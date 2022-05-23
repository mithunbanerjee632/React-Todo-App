import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import Todos from './Todos';
import style from './css/Home.module.css';
import Newtodo from './Newtodo';

const Home = () => {

     const [todos,setTodos]=useState([]);

     const handleAddTodo=(todo)=>{
           setTodos((prevTodos)=>{
               return [...prevTodos,{id:uuidv4(),todo}]
           })
     }

     const handleRemoveTodo=(id)=>{
        
        setTodos((prevTodos)=>{
          const filterTodos = prevTodos.filter((todo)=>todo.id !== id);
          return filterTodos;
        });
     }
  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}>Todo App</h1>
      <Newtodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
};

export default Home;