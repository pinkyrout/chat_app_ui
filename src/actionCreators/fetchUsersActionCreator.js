import Types from '../actions/types';
import { get } from '../apis/apiHelper.js';

const fetchUsers = () => dispatch => {
  console.log("fetching")
  get("api/users", "", { })
    .then(jsonResponse => {dispatch({
      type: Types.FETCH_USERS,
      payload: jsonResponse
    });
  })
};

export default fetchUsers;