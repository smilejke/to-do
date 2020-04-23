import {
  ADD_TASK,
  DELETE_TASK,
  CHECK_TASK,
  MAKE_ROUNDED,
  MAKE_SQUARE,
  MAKE_PYRAMID,
  SET_RALEWAY,
  SET_SHADOW_INTO_LIGHT,
  SET_MONTSERRAT,
  SET_OSWALD,
  SET_UBUNTU,
  SET_BANGERS,
  GOLD_THEME,
  BLUE_THEME,
  PURPLE_THEME,
  YELLOW_GREEN_THEME,
} from "./actions.js";

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

const defaultState = {
  todos: [
    { text: "Learn Vanilla JavaScript", checked: false },
    { text: "Learn React.js", checked: false },
    { text: "Learn Redux", checked: false },
  ],
  formClasses: ["to-do-item-container"],
  taskClasses: ["task"],
  themes: ["app"],
  sideBarThemes: ["sidebar-container"],
};

export const rootReducer = (state = defaultState, action) => {
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
    case MAKE_SQUARE:
      return updateObject(state, {
        formClasses: state.formClasses.filter(
          (el) => el !== "rounded" && el !== "pyramid"
        ),
      });
    case MAKE_ROUNDED:
      return updateObject(state, {
        formClasses: [
          ...state.formClasses.filter((el) => el !== "pyramid"),
          "rounded",
        ],
      });
    case MAKE_PYRAMID:
      return updateObject(state, {
        formClasses: [
          ...state.formClasses.filter((el) => el !== "rounded"),
          "pyramid",
        ],
      });
    case SET_RALEWAY:
      return updateObject(state, {
        taskClasses: [
          ...state.taskClasses.filter(
            (el) =>
              el !== "shadow-into-light" &&
              el !== "montserrat" &&
              el !== "oswald" &&
              el !== "ubuntu" &&
              el !== "bangers"
          ),
          "raleway",
        ],
      });
    case SET_SHADOW_INTO_LIGHT:
      return updateObject(state, {
        taskClasses: [
          ...state.taskClasses.filter(
            (el) =>
              el !== "raleway" &&
              el !== "montserrat" &&
              el !== "oswald" &&
              el !== "ubuntu" &&
              el !== "bangers"
          ),
          "shadow-into-light",
        ],
      });
    case SET_MONTSERRAT:
      return updateObject(state, {
        taskClasses: [
          ...state.taskClasses.filter(
            (el) =>
              el !== "raleway" &&
              el !== "shadow-into-light" &&
              el !== "oswald" &&
              el !== "ubuntu" &&
              el !== "bangers"
          ),
          "montserrat",
        ],
      });
    case SET_OSWALD:
      return updateObject(state, {
        taskClasses: [
          ...state.taskClasses.filter(
            (el) =>
              el !== "shadow-into-light" &&
              el !== "montserrat" &&
              el !== "raleway" &&
              el !== "ubuntu" &&
              el !== "bangers"
          ),
          "oswald",
        ],
      });
    case SET_UBUNTU:
      return updateObject(state, {
        taskClasses: [
          ...state.taskClasses.filter(
            (el) =>
              el !== "shadow-into-light" &&
              el !== "montserrat" &&
              el !== "raleway" &&
              el !== "oswald" &&
              el !== "bangers"
          ),
          "ubuntu",
        ],
      });
    case SET_BANGERS:
      return updateObject(state, {
        taskClasses: [
          ...state.taskClasses.filter(
            (el) =>
              el !== "shadow-into-light" &&
              el !== "montserrat" &&
              el !== "raleway" &&
              el !== "ubuntu" &&
              el !== "oswald"
          ),
          "bangers",
        ],
      });
    case GOLD_THEME:
      return updateObject(state, {
        themes: [
          ...state.themes.filter(
            (el) => el !== "blue" && el !== "yellow-green" && el !== "purple"
          ),
          "gold",
        ],
        sideBarThemes: [
          ...state.sideBarThemes.filter(
            (el) =>
              el !== "blue-sidebar" &&
              el !== "yellow-green-sidebar" &&
              el !== "purple-sidebar"
          ),
          "gold-sidebar",
          "sidebar-show",
        ],
      });
    case BLUE_THEME:
      return updateObject(state, {
        themes: [
          ...state.themes.filter(
            (el) => el !== "gold" && el !== "yellow-green" && el !== "purple"
          ),
          "blue",
        ],
        sideBarThemes: [
          ...state.sideBarThemes.filter(
            (el) =>
              el !== "gold-sidebar" &&
              el !== "yellow-green-sidebar" &&
              el !== "purple-sidebar"
          ),
          "blue-sidebar",
          "sidebar-show",
        ],
      });
    case PURPLE_THEME:
      return updateObject(state, {
        themes: [
          ...state.themes.filter(
            (el) => el !== "gold" && el !== "yellow-green" && el !== "blue"
          ),
          "purple",
        ],
        sideBarThemes: [
          ...state.sideBarThemes.filter(
            (el) =>
              el !== "gold-sidebar" &&
              el !== "yellow-green-sidebar" &&
              el !== "blue-sidebar"
          ),
          "purple-sidebar",
          "sidebar-show",
        ],
      });
    case YELLOW_GREEN_THEME:
      return updateObject(state, {
        themes: [
          ...state.themes.filter(
            (el) => el !== "gold" && el !== "purple" && el !== "blue"
          ),
          "yellow-green",
        ],
        sideBarThemes: [
          ...state.sideBarThemes.filter(
            (el) =>
              el !== "gold-sidebar" &&
              el !== "purple-sidebar" &&
              el !== "blue-sidebar"
          ),
          "yellow-green-sidebar",
          "sidebar-show",
        ],
      });
    default:
      return state;
  }
};
