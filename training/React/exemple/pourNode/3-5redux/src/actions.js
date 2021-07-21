import store from "./store";

export const setTargetPosition = ({ x, y }) => {
  store.dispatch({
    type: "ACTION_SET_TARGET_POSITION",
    payload: {
      x,
      y
    }
  });
};
