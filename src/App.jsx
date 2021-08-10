import React, { useState } from "react";
import "./styles.css";
import { AddTodo } from "./components/AddTodo";
import { SearchTodo } from "./components/SearchTodo";
import { TodoList } from "./components/TodoList";

export const App = () => {
  const [todos, setTodos] = useState(["Task1", "Task2"]);
  const [todoText, setTodoText] = useState("");
  const [searchTodos, setSearchTodos] = useState("");
  const [count, setCount] = useState(0);
  // const [searchText, setSearchText]=useState("");

  const onChangeTodoText = event => setTodoText(event.target.value);

  const onKeyPressAdd = e => {
    if (e.key === "Enter") {
      if (todoText === "") return;
      const newTasks = [...todos, todoText];
      setTodos(newTasks);
      setTodoText("");
    }
  };

  const searchTasks = event => {
    //   setSearchText(event.target.value);
    const filteredTodos = todos.filter(todo => {
      return todo.indexOf(event.target.value) !== -1;
      //   return todo.indexOf(searchText)!==-1;
      //   searchTextを使うとtodosのStateの更新が半テンポ遅れる？
    });
    setSearchTodos(filteredTodos);
    setCount(event.target.value.length);
  };

  const deleteList = num => {
    const newTasks = [...todos];
    // const newTasks=todosだとなぜうまくいかない？
    newTasks.splice(num, 1);
    setTodos(newTasks);
    const newFilteredTasks = [...searchTodos];
    newFilteredTasks.splice(num, 1);
    setSearchTodos(newFilteredTasks);
  };

  return (
    <>
      <div className="container">
        <div className="message-container">
          <h1>Todo List</h1>
          <h2>ADD TASK</h2>
        </div>

        <AddTodo
          onChangeTodoText={onChangeTodoText}
          todoText={todoText}
          keyPress={onKeyPressAdd}
        />

        <SearchTodo searchTasks={searchTasks} />

        <TodoList
          count={count}
          todos={todos}
          deleteList={deleteList}
          searchTodos={searchTodos}
        />
      </div>
    </>
  );
};
