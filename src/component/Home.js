import React,{useState} from 'react';
import Todos from './Todos';
import style from './css/Home.module.css';
import Newtodo from './Newtodo';

const Home = () => {

     const [todos,setTodos]=useState([]);

     const handleAddTodo=(todo)=>{
           console.log(todo);
     }
  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}>Todo App</h1>
      <Newtodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} />
    </div>
  );
};

export default Home;