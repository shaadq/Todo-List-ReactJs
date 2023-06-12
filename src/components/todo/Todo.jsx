import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Todo.scss";

const Todo = () => {
  const [todo, setTodo] = useState({ title: "" });
  const [todos, setTodos] = useState([
    { id: 1, title: "Shopping" },
    { id: 2, title: "Assignment" },
    { id: 3, title: "Workout" },
  ]);
  const taskChange = (e) => {
    const todoId = Math.floor(Math.random() * 9000) + 1000;
    setTodo({ id: todoId, title: e.target.value });
  };
  function addClick(e) {
    e.preventDefault();

    if (todo.title === "" || todo.title === null) {
      toast.error("Please fill the input field!!", { theme: "colored" });
    } else {
      toast.success("Task added!!", { theme: "colored" });
      setTodos((prevArray) => [...prevArray, todo]);
    }
    setTodo({ title: "" });
    document.getElementById("todoInput").value = "";
  }
  function deleteClick(todoId) {
    console.log("object");
    const updatedArray = todos.filter((obj) => obj.id !== todoId);
    setTodos(updatedArray);
  }
  function editclick(Todo) {
    document.getElementById("todoInput").value = Todo.title;

    // setTodos((prevItems) =>
    //   prevItems.map((item) => {
    //     if (item.id === Todo.id) {
    //       return { ...item, title: todo }; // Update the name property of the matching item
    //     }
    //     return item; // Return the unchanged item for other items
    //   })
    // );
  }

  return (
    <div className="main-container d-flex align-items-start justify-content-center w-100">
      <div className="todo-container">
        <div className="todo-top-container">
          <form className="todo-form gap-3">
            <input
              id="todoInput"
              type="text"
              value={todo.title}
              className="form-control"
              placeholder="Enter task"
              onChange={(e) => taskChange(e)}
              required
            />
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={(e) => addClick(e)}
            >
              Add
            </button>
          </form>
        </div>
        <div className="todo-bottom-container d-flex flex-column gap-2 align-items-center justify-content-start w-100">
          <h5 className="w-100">Todo List :</h5>
          <div className="todo-list-wrapper">
            {todos.length != 0 ? (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="todo-wrapper fade-out"
                  onAnimationEnd={() => deleteClick(todo.id)}
                >
                  <h6 className="todo-title">{todo.title}</h6>
                  <div className="todo-actions-wrapper">
                    <i
                      class="bi bi-trash"
                      title="Delete"
                      onClick={() => deleteClick(todo.id)}
                    ></i>
                    <i
                      class="bi bi-pencil"
                      title="Edit"
                      onClick={() => editclick(todo)}
                    ></i>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-todos-container justify-content-center">
                <h6 className="todo-title">No Todos added.</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
