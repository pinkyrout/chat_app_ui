import React from 'react';
import UsersList from '../components/UsersList.jsx';
import ChatBox from '../components/ChatBox.jsx';

class DashBoardContainer extends React.Component
{
  state = {
    current_user_id: this.props.current_user.id,
    to_user: null
  }

  handleOnClick = (event, user) => {
      // console.log("========", event, user)
      this.setState({to_user: user})
      //console.log(this.state.to_user.id)

    }

  render(){
    return(
      <div className = "container">
      <h3>Hi {this.props.current_user.name}</h3>
        <div className = "row">
          <div className = "col-md-3">
            <h1>Users</h1>
            <UsersList
              to_user = {this.state.to_user}
              handleOnClick = {this.handleOnClick}
            />
          </div>
          <div className = "col-md-6">
            <div id = 'chat_box'>
              <div>
                <h2>ChatBox</h2>
                <ChatBox
                  current_user_id = {this.state.current_user_id}
                  to_user = {this.state.to_user}
                />
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoardContainer;