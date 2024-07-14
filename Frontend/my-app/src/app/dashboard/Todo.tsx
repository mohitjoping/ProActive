// Add "use client" directive at the top to ensure client-side rendering
"use client";

// Import necessary modules from React, including TypeScript type annotations
import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

// Define TypeScript interfaces for type safety
interface TodoItem {
  id: string;
  todo: string;
  isCompleted: boolean;
}

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [showFinished, setShowFinished] = useState<boolean>(true);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const todos: TodoItem[] = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleEdit = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    const t = todos.find((i) => i.id === id);
    if (t) {
      setTodo(t.todo);
      const newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
      saveToLS();
    }
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.name;
    const index = todos.findIndex((item) => item.id === id);
    const newTodos = [...todos];
    if (index !== -1) {
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
      saveToLS();
    }
  };

  return (
    <div className="hide-scrollbar mx-3 md:container md:ml-2 rounded-xl p-5  bg-violet-200 min-h-[1400px] max-h-[80vh] min-w-8 overflow-hidden overflow-y-scroll self-center">
      <div className="addTodo my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-violet-950">TASK</h1>
        <div className="flex">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Type at least 4 characters"
            className="w-full rounded-full px-5 py-1 text-violet-950 bg-violet-100 border border-violet-950 border-opacity-30"
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-violet-950 mx-2 rounded-full hover:bg-violet-800 p-4 py-2 text-sm font-bold text-white"
          >
            Add
          </button>
        </div>
      </div>
      <input
        className="my-4 overflow-wrap-break-word accent-violet-950"
        id="show"
        onChange={toggleFinished}
        type="checkbox"
        checked={showFinished}
      />
      <label className="mx-2 text-violet-950" htmlFor="show">
        Show Finished
      </label>
      <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>
      <h2 className="text-2xl font-bold text-violet-950">Your To-Do's</h2>
      <div className="todos">
        {todos.length === 0 && <div className="m-5 text-violet-950">No Todos to display</div>}
        {todos.map((item) => (
          (showFinished || !item.isCompleted) && (
            <div key={item.id} className="todo flex my-3 justify-between">
              <div className="flex gap-5 text-violet-950 accent-violet-950">
                <input
                  name={item.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  checked={item.isCompleted}
                />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button
                  onClick={(e) => handleEdit(e, item.id)}
                  className="bg-violet-950 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={(e) => handleDelete(e, item.id)}
                  className="bg-violet-950 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Todo;
