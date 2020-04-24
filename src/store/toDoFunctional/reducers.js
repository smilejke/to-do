import { ADD_TASK, DELETE_TASK, CHECK_TASK } from "./actions.js";
import { updateObject } from "../../utils/utilites.js";

const defaultState = {
  todos: [
    { text: "Learn Vanilla JavaScript", checked: false },
    { text: "Learn React.js", checked: false },
    { text: "Learn Redux", checked: false },
  ],
};

export const functionalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return updateObject(state, {
        todos: state.todos.some((el) => el.text === action.payload)
          ? [...state.todos]
          : [
              ...state.todos,
              {
                text: action.payload
                  .replace(/^\s\s*/, "")
                  .replace(/\s\s*$/, ""), // faster than trim
                checked: false,
              },
            ],
      });
    case DELETE_TASK:
      return updateObject(state, {
        todos: state.todos.filter((el) => el.text !== action.payload),
      });
    case CHECK_TASK:
      return updateObject(state, {
        todos: state.todos.map((el) => {
          if (el.text === action.payload) {
            el.checked = !el.checked;
            return el;
          } else return el;
        }),
      });
    default:
      return state;
  }
};
