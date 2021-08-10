import React from "react";

export const SearchTodo = props => {
  const { searchTasks } = props;
  return (
    <div className="search-container">
      <input onChange={searchTasks} placeholder="Search Keyword"></input>
    </div>
  );
};
