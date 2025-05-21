import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto mt-6 p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-blue-700 mb-5">
        Your Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-gray-500 text-center italic">
          No tasks added yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 px-5 py-3 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200"
            >
              <span className="text-gray-800 text-lg">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg text-sm transition-all duration-200"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
