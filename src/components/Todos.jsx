import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({todos}) => {
  return (
    <div>
     {todos.map((item) => {
        return <TodoItem key={item.id} todo={item}/>;
      })}
    </div>
  );
};
