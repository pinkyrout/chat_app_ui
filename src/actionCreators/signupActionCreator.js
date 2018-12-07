import Types from '../actions/types';
import { post } from '../apis/apiHelper.js';

const createUser = (payload) => dispatch => {
  post("api/users", payload, { })
    .then(jsonResponse => {
      console.log(jsonResponse.id)
      console.log(jsonResponse)
      dispatch({
        type: Types.CREATE_USER,
        payload: jsonResponse
      });
    })
};

export default createUser;