'use client'
import React, { useState, useEffect } from 'react';

interface TodoType {
  id: number;
  title: string;
  isDone: boolean;
}

function TodosList() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch('/api/todos');
      const data = await response.json();
      setTodos(data);
    }

    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
export default TodosList;