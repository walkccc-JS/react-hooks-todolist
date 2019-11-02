import React, { useContext } from 'react';
import { TodosContext } from '../contexts/todos.context';
import Todo from './Todo';

function TodoList() {
  const todos = useContext(TodosContext);

  return (
    <ul style={{ paddingLeft: 10, width: '95%' }}>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
