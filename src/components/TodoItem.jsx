import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <div style={style}>
      <p>{todo.title}</p>
    </div>
  );

}
const style = {
  border: '2px solid #f4f4f4',
  fontSize: '24px',
};
