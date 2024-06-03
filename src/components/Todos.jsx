import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((item) => {
        return <TodoItem key={item.id} todo={item} />;
      })}
    </div>
  );
};

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};
