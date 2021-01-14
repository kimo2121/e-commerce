const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
