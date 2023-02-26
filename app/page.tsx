import AddNewTodo from "./add-new-todo";
import React from "react";
import TodoList from "./todo-list";

export default function Page(): JSX.Element{
    return ( 
        <div>
            <AddNewTodo />
            <TodoList />  
         
        </div>

    );
}