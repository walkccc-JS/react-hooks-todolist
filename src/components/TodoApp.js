import React from 'react';
import { TodosProvider } from '../contexts/todos.context';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  return (
    <TodosProvider>
      <TodoForm />
      <TodoList />
    </TodosProvider>
  );
}

export default TodoApp;
