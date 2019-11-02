import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/todos.context';
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/TodoFormStyles';
import { ADD_TODO } from '../constants/actions';

function TodoForm() {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: ADD_TODO, task: value });
        clearValue();
      }}
      className={classes.TodoForm}
    >
      <input
        placeholder="Add your task here..."
        value={value}
        onChange={handleChange}
        className={classes.input}
      />
    </form>
  );
}

export default TodoForm;
