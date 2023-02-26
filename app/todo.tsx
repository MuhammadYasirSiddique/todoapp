"use client";

import { BlobOptions } from "buffer";
import { useRouter } from "next/navigation";

async function update (id: number, isDone: boolean, refresh: ()=>void):Promise<void>{
    await fetch(`/api/todo/update`, {
        method: 'POST',
        // mode: "no-cors",
        body: JSON.stringify({id, isDone}),
    });

    refresh();
}

async function deleteTodo(id: number, refresh: ()=> void): Promise<void> {
    await fetch(`/api/todo/delete?id=${id}`, {
        method: 'DELETE',
        // mode: "no-cors"
    });

    refresh();
}

type TodoProps ={
    todo:{
        id: number;
        isDone: boolean;
        name: string;
    };
};

export default function Todo({todo}: TodoProps): JSX.Element {
    const router = useRouter();

    const updateTodo = (isDone: boolean) => {
        update(todo.id, isDone, router.refresh)
    };

    const handledeleteTodo = () =>{
        deleteTodo(todo.id, router.refresh);
    }


    return(
        <>
            <label>.
            <input 
                type="checkbox" 
                onChange={(e) => updateTodo(e.target.checked)} 
                checked={todo.isDone}
            /></label>
            <span>{todo.name}</span>
            <button onClick={handledeleteTodo}>
                Delete
            </button>
        </>
    );

}