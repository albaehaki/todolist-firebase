"use client"
// components/TodoList.tsx

import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
    };

    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border-b border-gray-300"
          >
            <span>{todo.text}</span>
            <button
              className="text-red-600 hover:text-red-800 focus:outline-none"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
