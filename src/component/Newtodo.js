import React from 'react';
import style from './css/Newtodo.module.css';

const Newtodo = () => {
  return (
    
      <form className={style.form}>
        <div className={style["form-field"]}>
          <label htmlFor='title'>Title: </label>
          <input type="text" name="title" id="title"/>
        </div>

        <div className={style["form-field"]}>
          <label htmlFor='description'>Description: </label>
          <textarea type="text" name="description" id="description"/>
        </div>

        <button type='submit'>Add Todo</button>
      </form>
    
  );
};

export default Newtodo;