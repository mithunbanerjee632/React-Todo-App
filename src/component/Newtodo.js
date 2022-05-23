import React,{useState} from 'react';
import style from './css/Newtodo.module.css';

const Newtodo = (props) => {

  const [todo,setTodo]=useState({title:" ", description:" "});

  const {title,description}=todo

  const handleChange=(event)=>{
     const name=event.target.name;

     setTodo((oldTodo)=>{
         return {...oldTodo,[name]:event.target.value}
     })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title:" ",description:" "});
  }
  return (
    
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor='title'>Title: </label>
          <input type="text" name="title" id="title" onChange={handleChange} value={title}/>
        </div>

        <div className={style["form-field"]}>
          <label htmlFor='description'>Description: </label>
          <textarea type="text" name="description" id="description" onChange={handleChange} value={description}/>
        </div>

        <button type='submit'>Add Todo</button>
      </form>
    
  );
};

export default Newtodo;