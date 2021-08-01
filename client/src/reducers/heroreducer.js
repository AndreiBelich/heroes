import ACTION_TYPES from "../actions";

const initialState = [];

const heroReducer = (state = initialState, action) => {
  switch(action.type){
    case ACTION_TYPES.GET_HEROES:
      return [...action.payload];
    default:
      return state;
  }
}

export default heroReducer;