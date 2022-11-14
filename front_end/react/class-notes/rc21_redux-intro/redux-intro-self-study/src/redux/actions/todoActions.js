import { ADD_TODO } from "../types/todoType";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
