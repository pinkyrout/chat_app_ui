import React from 'react';
import { post } from '../apis/apiHelper.js';
import DashBoardContainer from './DashBoardContainer.jsx';
import createUser from '../actionCreators/signupActionCreator.js';
import { connect } from 'react-redux';

class SignUpContainer extends React.Component
{
  state = {
    isSubmitted: false,
    current_user: null
  }

  // handleOnSubmit = (event) => {
  //   const payload = {name: document.getElementById("user_name").value}
  //   console.log(payload);
  //   this.props.createUser(payload);
  //   this.setState({isSubmitted: true});
  //   console.log(this.props.isSubmitted);
  //   console.log(this.props.current_user_id)
  // }

  handleOnSubmit = (event) => {
    //debugger
    const payload = {name: document.getElementById("user_name").value}
    post("api/users", payload, { })
      .then(jsonResponse => {
        console.log(jsonResponse.id)
        console.log(this.state)
        this.setState({isSubmitted: true, current_user: jsonResponse});
        console.log(this.state)
        console.log("======================")
        console.log(this.props)
        //console.log(event)
        //this.setState({current_user_id: jsonResponse.id});
      });
  }
  
  render(){
    
    if(this.state.isSubmitted === false)
    {
      return(
        <div className = 'container'>
          <label>Enter your name</label>
          <input id = 'user_name'/>
          <button
            className = 'btn btn-success'
            onClick = {this.handleOnSubmit}
          >SignUp</button>
        </div>
      );
    }
    else
    {
      return(
        <DashBoardContainer
          current_user = {this.state.current_user}
        />
      )
    }
  }

}

// const mapStateToProps = state => ({
//   current_user_id: state.user.current_user_id,
//   current_user_name: state.user.current_user_name,
//   isSubmitted: state.user.isSubmitted
// });

//export default connect(mapStateToProps, { createUser })(SignUpContainer);
export default SignUpContainer;