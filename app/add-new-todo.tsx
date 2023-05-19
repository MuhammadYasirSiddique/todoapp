"use client";
import { useRouter } from "next/navigation";
// import { stringify } from "querystring";
import { useState } from "react";

async function addTodo(name: string, refresh: { (): void; (): void }) {
  await fetch("/api/todo/add", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");

  const handleAddTodo = async () => {
    if (!name || name.trim() === "") {
      alert("Todo cannot be empty.");
      return;
    }
    await addTodo(name, router.refresh);
    setName("");
  };

  return (
    <div className="">
      <div>
        <label>
          <input
            type="text"
            className="font-normal border border-slate-300 rounded-full py-1 pl-4 pr-4 shadow-md focus:outline-blue-500        placeholder:italic placeholder:text-slate-400 "
            placeholder="Enter your task to do..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <button
          type="button"
          className=" mx-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full shadow-lg mb-4 shadow-md shadow-gray-400"
          onClick={handleAddTodo}
        >
          Add Task
        </button>
        <br />
      </div>
    </div>
  );
}
