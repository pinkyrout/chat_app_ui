import React from 'react';
import UserDetails from './UserDetails.jsx';
import { get } from '../apis/apiHelper.js';
import users_list from '../App.css';

class UsersList extends React.Component
{
  state = {
    users: []
  }

  componentDidMount() {
    get("api/users", "", { })
      .then(jsonResponse => {
        console.log(jsonResponse)
        this.setState({ users: jsonResponse});
    })
      .catch(errorResponse => {
        console.log("2222222222222222", errorResponse);
    });
  }

  render(){
    return(
      <ul className= 'list-group'>{
        this.state.users.map((user) => {
          if( this.props.to_user && user.id === this.props.to_user.id)
          {
           return (
              <li key={user.id} className = 'list-group-item active'
                onClick = { event => {
                 this.props.handleOnClick(event, user)
              }
              }
              >{user.name}
              </li>
              )
          }
          else
          {
            return (
              <li key={user.id} className = 'list-group-item'
                onClick = { event => {
                 this.props.handleOnClick(event, user)
              }
              }
              >{user.name}
              </li>
            )
          }
        })
      }</ul>
    );
  }

}

export default UsersList;