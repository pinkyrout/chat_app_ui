import React from 'react';
import Chat_Box from '../App.css';
import { get } from '../apis/apiHelper.js';
import { post } from '../apis/apiHelper.js';

class ChatBox extends React.Component {
  state = {
    messages: [],
    send: false
  }

  componentDidMount(){
    this.timer = setInterval(()=> this.fetch_messages(), 5000);
    //this.fetch_messages()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.to_user !== this.props.to_user || prevState.send !== this.state.send)
    {
      this.fetch_messages()
      //this.timer = setInterval(()=> this.fetch_messages(), 1000);
    }
    console.log(prevProps.to_user)
  }

  fetch_messages(){
    if(this.props.to_user)
     {
       get("api/users/"+this.props.current_user_id+"/load_messages?from_user_id="+this.props.to_user.id, "", { })
         .then(jsonResponse => {
         console.log(jsonResponse)
         this.setState({ messages: jsonResponse});
       })
    }
  }

  handleOnSend = (event) => {
    const payload = {content: document.getElementById("user_input").value,
                     from_id: this.props.current_user_id, to_id: this.props.to_user.id}
    post("api/messages", payload, { })
      .then(jsonResponse => {
        document.getElementById('user_input').value = '';
        console.log("========================");
        if(this.state.send === false)
        {
          this.setState({send: true});
        }
        else
        {
          this.setState({send: false});  
        }

      })
  }

  render(){
    if(this.props.to_user == null)
    {
      return(
        <div>
        <h4>Select a User to Chat</h4>
        </div>
        );
    }
    else
    {
      return(
         <div>
            <div>{
               this.state.messages.map((message) => {
                if(message.from_id === this.props.current_user_id)
                {
                   return (
                  <p key={message.id} className = "list-group-item-text text-right">
                    {message.content}
                  </p>
                )
               }
               else{
                 return (
                  <p key={message.id} className = "list-group-item-text text-left">
                    {message.content}
                  </p>
                )}
               })
           }</div>
           <div className = 'form-inline'>
              <input id = 'user_input' className = 'form-control col-md-9'/>
              <button 
              onClick = { event => {
                this.handleOnSend()
              }
              }
              className = 'btn btn-success'
              >Send</button>
            </div>
        </div>
      );
    }
  }
}


export default ChatBox;