import React, { useState } from "react";
import { Input } from "antd";
import { addTask } from "../../store/toDoFunctional/actions.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const { Search } = Input;

function InputToDo(props) {
  const { addTask } = props;
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const ifEmpty = (str) => {
    return !(str.length === 0 || !str.trim());
  };

  return (
    <div className="input-container">
      <span className="validation">You need to do something</span>
      <Search
        placeholder="What to do?"
        enterButton="Add task"
        size="large"
        value={inputValue}
        onChange={handleChange}
        onSearch={(value) => {
          if (ifEmpty(value)) {
            addTask(value);
            setInputValue("");
          }
        }}
        className="input"
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.actions.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputToDo);
