import React from "react";
import InputToDo from "./Input/Input.js";
import ToDoItem from "./toDoItem/ToDoItem.js";
import NothingToDo from "./NothingToDo/NothingToDo.js";
import { connect } from "react-redux";
import { getRandomImage } from "./NothingToDo/backgrounds.js";
import Sidebar from "./Sidebar/Sidebar.js";
import SidebarButton from "./SidebarButton/SidebarButton.js";

function App(props) {
  const { todos } = props;

  return (
    <div className={props.themes.join(" ")}>
      <div className="todo-placement">
        <InputToDo />
        {todos.length > 0 ? (
          todos.map((el) => (
            <ToDoItem
              key={"task" + el + Math.random()}
              text={el.text}
              checked={el.checked}
            />
          ))
        ) : (
          <NothingToDo image={getRandomImage()} />
        )}
      </div>
      <SidebarButton />
      <Sidebar />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    themes: state.themes,
  };
};

export default connect(mapStateToProps)(App);
