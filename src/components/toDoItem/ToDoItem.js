import React from "react";
import { Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { deleteTask, check } from "../../store/actions.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function ToDoItem(props) {
  return (
    <div className={"to-do-item-container to-do-show rounded"} id={props.text}>
      <Checkbox
        checked={props.checked}
        className={props.checked ? "task done" : "task"}
        id={props.text}
        onChange={(e) => {
          props.check(e.target.id);
        }}
      >
        <span>{props.text}</span>
      </Checkbox>
      <DeleteTwoTone
        className="icon"
        id={props.text}
        onClick={(e) => {
          props.deleteTask(e.currentTarget.id);
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: bindActionCreators(deleteTask, dispatch),
    check: bindActionCreators(check, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
