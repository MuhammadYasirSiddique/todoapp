
import Todo from "./todo"
import React, {useEffect, useState} from "react";


interface TodoType{
    id: number;
    name: string;
    isDone: boolean;
}


const getTodos = async () => {
    let todos = await fetch(`https://json-api-topaz-omega.vercel.app/api/todo/list`);
    return todos.json();
};

 const TodoList = async(): Promise<JSX.Element> => {
    const { todos } = await getTodos();

    return(
        <div>
            <ul className="">
                {todos.map((t: TodoType) => {
                    return(
                        
                        <li className="mb-1" key={t.id}>
                            <Todo todo={t} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );

    

}

export default TodoList;
