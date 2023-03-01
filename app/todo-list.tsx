
'use client'
import Todo from "./todo"
import React, { useEffect, useState } from "react";

interface TodoType {
  id: number;
  name: string;
  isDone: boolean;
}

const getTodos = async (lastTodoId?: number) => {
  let url = `./api/todo/list`;
  if (lastTodoId !== undefined) {
    url += `?since_id=${lastTodoId}`;
  }
  let todos = await fetch(url);
  return todos.json();
};

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [lastTodoId, setLastTodoId] = useState<number | undefined>(undefined);

  const fetchTodos = async () => {
    const data = await getTodos(lastTodoId);
    if (data.todos.length > 0) {
      setLastTodoId(data.todos[data.todos.length - 1].id);
      setTodos([...todos, ...data.todos]);
    }
  };

  useEffect(() => {
    fetchTodos();
    const interval = setInterval(() => {
      fetchTodos();
    }, 500);
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
