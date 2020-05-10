import {
  ADD_TASK,
  DELETE_TASK,
  CHECK_TASK,
  VALIDATE_TO_DO,
  SET_VALIDATION_TO_DEFAULT,
} from "./actions.js";
import { updateObject } from "../../utils/utilites.js";

const defaultState = {
  todos: [
    { text: "Learn Vanilla JavaScript", checked: false },
    { text: "Learn React.js", checked: false },
    { text: "Learn Redux", checked: false },
  ],
  validationStatus: "empty",
};

export const functionalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return updateObject(state, {
        todos: state.todos.some((el) => el.text === action.payload.trim())
          ? [...state.todos]
          : [
              ...state.todos,
              {
                text: action.payload.trim(), // .replace(/^\s\s*/, "").replace(/\s\s*$/, "")
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
    case VALIDATE_TO_DO:
      return updateObject(state, {
        validationStatus:
          action.payload.trim() === "" || action.payload.length === 0
            ? "empty"
            : state.todos.some((el) => el.text === action.payload.trim())
            ? "exist"
            : "correct",
      });
    case SET_VALIDATION_TO_DEFAULT:
      return updateObject(state, {
        validationStatus: "empty",
      });
    default:
      return state;
  }
};
