import React from "react";

function List(props) {
  const {
    options: { header, lists },
    action,
  } = props;
  return (
    <div>
      <span>{header}</span>
      <ul>
        {lists.map((el) => {
          return (
            <li
              key={el.text}
              onClick={() => {
                action(el.class);
              }}
            >
              {el.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default List;
