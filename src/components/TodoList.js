import React, { useContext } from 'react';
import { TodosContext } from '../contexts/todos.context';

function TodoList() {
  const todos = useContext(TodosContext);

  return (
    <ul style={{ paddingLeft: 10, width: '95%' }}>
      {todos.map(todo => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

export default TodoList;
