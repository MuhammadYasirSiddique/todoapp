"use client";
import { useRouter } from "next/navigation";
// import { stringify } from "querystring";
import { useState } from "react";

async function addTodo(name, refresh){
    await fetch('/api/todo/add', {
        method: "POST",
        body: JSON.stringify({name}),
    });
    refresh();
}

export default function AddNewTodo() {
    const router = useRouter();
    let [name, setName]= useState("");
    return(
        <div>
                <label>Enter Your Task  
                <input type="text" 
                    onChange={(e) => setName(e.target.value)} 
                    value ={name}  
                />
                </label>
                <button onClick={async() => {
                        await addTodo(name, router.refresh);
                        setName("");
                    }}
                >
                    Add Task
                </button>
        </div>
    );
}