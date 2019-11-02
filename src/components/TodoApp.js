import React from 'react';
import { TodosProvider } from '../contexts/todos.context';
import TodoList from './TodoList';

function TodoApp() {
  return (
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
}

export default TodoApp;
