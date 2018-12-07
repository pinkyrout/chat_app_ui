import React from 'react';
import { get } from '../apis/apiHelper.js';
import { connect } from 'react-redux';
import fetchUsers from '../actionCreators/fetchUsersActionCreator';

class UsersList extends React.Component
{
  // state = {
  //   users: []
  // }

  // componentDidMount() {
  //   get("api/users", "", { })
  //     .then(jsonResponse => {
  //       this.setState({ users: jsonResponse});
  //   })
  //     .catch(errorResponse => {
  //       console.log("2222222222222222", errorResponse);
  //   });
  // }

  componentWillMount() {
    //debugger
    console.log("in componentDidMount")
    this.props.fetchUsers();
  }

  render(){
    return(
      <ul className= 'list-group'>{
        this.props.users.map((user) => {
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


const mapStateToProps = state => ({
  users: state.usersList.users
});

export default connect(mapStateToProps, { fetchUsers } )(UsersList);

//export default connect(null, { fetchUsers })(UsersList);