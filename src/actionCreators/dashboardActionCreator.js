import Types from '../actions/types.js';
const selectedUser = user => {
  type: Types.SELECTED_USER,
  user
};

export default selectedUser;