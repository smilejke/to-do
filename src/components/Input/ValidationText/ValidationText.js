import React from "react";

function ValidationText(props) {
  return (
    <span className={props.classes}>
      {props.status === "empty"
        ? "You need to do something"
        : props.status === "exist"
        ? "You have this task already"
        : "Okay"}
    </span>
  );
}

export default ValidationText;
