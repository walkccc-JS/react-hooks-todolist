import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/todos.context';
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/EditTodoFormStyles.js';
import { EDIT_TODO } from '../constants/actions';

function EditTodoForm({ id, task, toggleEditForm }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState(task);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: EDIT_TODO, id, task: value });
        toggleEditForm();
        clearValue();
      }}
      className={classes.EditTodoForm}
    >
      <input
        autoFocus
        value={value}
        onChange={handleChange}
        onClick={e => e.stopPropagation()}
        className={classes.input}
      />
    </form>
  );
}

export default EditTodoForm;
