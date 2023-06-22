import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  addTodos,
} from "../redux/reducer";
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';
import { ITodoItem } from "../interface";

const ToDoList = (props: any) => {
  const dispatch = useDispatch()

  const todos = useSelector((state: any) => state);
  const [todoInput, setTodo] = useState('');

  const add = () => {
    if (todoInput === "") {
      alert("Input is Empty");
    } else {
      const toItem: ITodoItem = {
        id: uuidv4(),
        todo: todoInput,
        completed: false,
      };
      dispatch(addTodos(toItem));
      setTodo("");
    }
  };

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  return (
    <div className='bg-gray-900 min-h-screen w-min-screen w-full'>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg absolute top-24">
          <div className="mb-4">
            <h1 className="text-grey-darkest">A experimental todo list build with React, Redux and Tailwindcss</h1>
            <div className="flex mt-4">
              <input onChange={(e) => handleChange(e)} value={todoInput} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"></input>
              <button onClick={() => add()} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </div>
          </div>
          <div>
            {
              todos?.map((todo: ITodoItem) =>
                <TodoItem key={todo.id} id={todo.id} todo={todo.todo} completed={todo.completed}></TodoItem>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;


