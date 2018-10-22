import React from 'react';
import { post } from '../apis/apiHelper.js';
import DashBoardContainer from './DashBoardContainer.jsx';

class SignUpContainer extends React.Component
{
  state = {
    isSubmitted: false,
    current_user: null
  }
  
  handleOnSubmit = () =>{
    const payload = {name: document.getElementById("user_name").value}
    post("api/users", payload, { })
      .then(jsonResponse => {
        console.log(jsonResponse.id)
        this.setState({isSubmitted: true, current_user: jsonResponse});
        //this.setState({current_user_id: jsonResponse.id});
      })
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
            onClick = { event => {
              this.handleOnSubmit()
            }
            }
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

export default SignUpContainer;