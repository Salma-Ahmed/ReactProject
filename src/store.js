import { createStore } from "redux";

const intialState = {};
const Store = createStore((state = intialState, action) => {
  if (action.type === "ADD_MOVIE") {
    return state;
  }
  if (action.type === "REMOVE_MOVIE") {
    return state;
  }
  return state;
});

export default Store;
