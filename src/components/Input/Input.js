import React, { useState } from "react";
import { Input } from "antd";
import { addTask, validate } from "../../store/toDoFunctional/actions.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ValidationText from "./ValidationText/ValidationText.js";

const { Search } = Input;

function InputToDo(props) {
  const { addTask, validate, validationStatus } = props;
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    validate(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="input-container">
      <ValidationText status={validationStatus} />
      <Search
        placeholder="What to do?"
        enterButton="Add task"
        size="large"
        value={inputValue}
        onChange={handleChange}
        onSearch={(value) => {
          if (validationStatus !== "empty") {
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
    validationStatus: state.actions.validationStatus,
    todos: state.actions.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
    validate: bindActionCreators(validate, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputToDo);
