import { combineReducers } from 'redux';
import usersListReducer from './usersListReducer';
import signupContainerReducer from './signupContainerReducer';

export default combineReducers({
  usersList: usersListReducer,
  user: signupContainerReducer
});