import React from "react";

export const TodoList = props => {
  const { count, todos, deleteList, searchTodos} = props;

  return (
    <div className="list-container">
      <ul>
        {count === 0 &&
          todos.map((todo, index) => {
            return (
              <li>
                <div key={todo} className="task-name">
                  <p className="add-task">{todo}</p>
                  <i
                    class="far fa-trash-alt"
                    onClick={() => {
                      deleteList(index);
                    }}
                  ></i>
                </div>
              </li>
            );
          })}
        {count > 0 &&
          searchTodos.map((todo, index) => {
            return (
              <li>
                <div key={todo} className="task-name">
                  <p className="add-task">{todo}</p>
                  <i
                    class="far fa-trash-alt"
                    onClick={() => {
                      deleteList(index);
                    }}
                  ></i>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
