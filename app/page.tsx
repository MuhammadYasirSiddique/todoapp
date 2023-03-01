import AddNewTodo from "./add-new-todo";
import React from "react";
import TodoList from "./todo-list";
import TextInput from "./components/usestate";


export default function Page(): JSX.Element{
    return ( 
        <div  className="mx-auto p-1 border-2 border-gray-400  shadow-md shadow-gray-400 flex flex-wrapjustify-center lg:justify-start ">
            <div className="w-full md:w-1/2 p-4">
                    <AddNewTodo />
                    <TodoList />  
               
            
            </div>
        </div>

    );
}