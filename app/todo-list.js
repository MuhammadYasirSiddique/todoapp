import Todo from "./todo"

const getTodos = async () => {
    let todos = await fetch(`https://json-api-topaz-omega.vercel.app/api/todo/list`);
    return todos.json();
}

export default async function TodoList() {
    const { todos } = await getTodos();

    return(
        <div>
            <ul style={{listStyleType: "none", padding: 0 }}>
                {todos.map((t) => {
                    return(
                        
                        <li key={t.id} style={{padding: "5px 0"}}>
                            <Todo todo={t} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );






    // console.log(todos);
    // return(
    //     <div>
    //             <ul >
    //                 <li>New Todo 1</li>
    //                 <li>New Todo 2</li>
    //                 <li>New Todo 3</li>
    //             </ul>

    //         </div>
    // );

}