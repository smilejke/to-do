import React, { useState } from "react";
import { Input } from "antd";
import {
  addTask,
  validate,
  setValidationToDefault,
} from "../../store/toDoFunctional/actions.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ValidationText from "./ValidationText/ValidationText.js";

const { Search } = Input;

function InputToDo(props) {
  const { addTask, validate, validationStatus, setValidationToDefault } = props;
  const [inputValue, setInputValue] = useState("");
  const [classes, setClasses] = useState("validation");

  const handleChange = (e) => {
    if (classes !== "validation") {
      setClasses("validation");
    }
    validate(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="input-container">
      <ValidationText status={validationStatus} classes={classes} />
      <Search
        placeholder="What to do?"
        enterButton="Add task"
        size="large"
        value={inputValue}
        onChange={handleChange}
        onSearch={(value) => {
          if (value === "") {
            validate(value);
          }
          if (validationStatus === "empty" || validationStatus === "exist") {
            setClasses("validation visible");
            setInputValue("");
          } else {
            addTask(value);
            setInputValue("");
            setValidationToDefault();
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
    setValidationToDefault: bindActionCreators(
      setValidationToDefault,
      dispatch
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputToDo);
