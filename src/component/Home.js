import React from 'react';
import Todos from './Todos';
import style from './css/Home.module.css';
import Newtodo from './Newtodo';

const Home = () => {

  const dummyTodos=[
    {
      id:"1",
      title:"Todo Title 1",
      description:"Todo Description is Here..."
    },
    {
      id:"2",
      title:"Todo Title 2",
      description:"Todo Description is Here..."
    }
  ]
  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}>Todo App</h1>
      <Newtodo/>
      <Todos todos={dummyTodos}/>
    </div>
  );
};

export default Home;