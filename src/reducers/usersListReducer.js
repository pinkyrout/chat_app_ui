import Types from '../actions/types';

const initialState = {
  users: []
}

const usersListReducer = (state = initialState, action) => {
  //debugger
  switch(action.type){
    case Types.FETCH_USERS:
      return {
         ...state,
         users: action.payload
      }
    
    default:
      return state;
  }
};

export default usersListReducer;