import React, { ChangeEvent, useRef, useState } from "react";
import { ITodoItem } from "../interface";
import {
  addTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";


const TodoItem = (props: ITodoItem) => {
  const todos = useSelector((state: ITodoItem[]) => state);
  const tempTodo = todos.find(function (todo) {
    return todo.id === props.id;
  });

  let [todo, setTodo] = useState(tempTodo);
  const dispatch = useDispatch()


  const onClickUpdate = () => {
    if (todo) {
      const tempTodo: ITodoItem = {
        id: todo.id,
        todo: todo.todo,
        completed: !todo.completed,
      }
      setTodo(tempTodo);
      dispatch(updateTodos(tempTodo));
    }
  }



  const onClickrRemove = () => {
    dispatch(removeTodos(todo));
  };




  return (
    <>
      {
        todo ?
          <>
            <div className="flex mb-4 items-center">
              {
                !todo.completed ?
                  <>
                    <p className="w-full text-grey-darkest">{todo.todo}</p>
                    <button onClick={onClickUpdate} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-grey border-grey hover:bg-slate-300">Check</button>
                  </>
                  :
                  <>
                    <p className="w-full line-through text-grey-darkest">{todo.todo}</p>
                    <button onClick={onClickUpdate} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green border-green hover:bg-slate-300">Uncheck</button>
                  </>
              }

              <button onClick={onClickrRemove} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:bg-slate-300">Remove</button>
            </div>

          </>



          :
          <></>
      }

    </>



  );
};

export default TodoItem;

