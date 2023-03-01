
'use client'
import Todo from "./todo"
import React, { useEffect, useState } from "react";

interface TodoType {
  id: number;
  name: string;
  isDone: boolean;
}

const getTodos = async () => {
  let todos = await fetch(`./api/todo/list`);
  return todos.json();
};

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data.todos);
  };

  useEffect(() => {
    fetchTodos();
    const interval = setInterval(() => {
      fetchTodos();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ul className="">
        {todos.map((t: TodoType) => {
          return (
            <li className="mb-1" key={t.id}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
