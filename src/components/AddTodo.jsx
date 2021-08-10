import React from "react";

export const AddTodo = props => {
  const { onChangeTodoText, todoText, keyPress } = props;
  return (
    <div className="add-container">
      <input
        placeholder="New Task"
        onChange={onChangeTodoText}
        value={todoText}
        onKeyPress={keyPress}
      ></input>
    </div>
  );
};
