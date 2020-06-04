const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + action.payLoad,
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - action.payLoad,
      };
    case "RND":
      return { ...state, counter: action.payLoad };
    default:
      return { ...state };
  }
};
export default reducer;
