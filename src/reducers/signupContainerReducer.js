import Types from '../actions/types';

const initialState = {
   isSubmitted: false,
   current_user_id: null,
   current_user_name: null
}

const signupContainerReducer = (state = initialState, action) =>{
   //debugger
   switch(action.type){
      case Types.CREATE_USER:
      return {
         ...state,
         current_user_id: action.payload.id,
         current_user_name: action.payload.name,
         isSubmitted: true
      }
      default:
        return state;
   }
}

export default signupContainerReducer;