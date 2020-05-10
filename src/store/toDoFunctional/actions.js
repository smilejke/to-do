export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const CHECK_TASK = "CHECK_TASK";
export const VALIDATE_TO_DO = "VALIDATE_TO_DO";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (task) => {
  return {
    type: DELETE_TASK,
    payload: task,
  };
};

export const check = (id) => {
  return {
    type: CHECK_TASK,
    payload: id,
  };
};

export const validate = (value) => {
  return {
    type: VALIDATE_TO_DO,
    payload: value,
  };
};
