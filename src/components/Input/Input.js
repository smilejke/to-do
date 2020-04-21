import React, { useState } from "react";
import { Input } from "antd";
import { addTask } from "../../store/actions.js";
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
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputToDo);
