import { combineReducers } from 'redux';
import usersListReducer from './usersListReducer';

export default combineReducers({
  usersList: usersListReducer
});