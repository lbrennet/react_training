const initialState = {
  x: 0,
  y: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ACTION_SET_TARGET_POSITION":
      return { ...state, x: action.payload.x, y: action.payload.y };
    default:
      return state;
  }
}

export default reducer;
