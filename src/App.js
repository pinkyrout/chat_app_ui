import  React,  {  Component  }  from  'react';
import  SignUpContainer  from  './container/SignUpContainer.jsx';
import  './App.css';
import  {  BrowserRouter,  Route  }  from  'react-router-dom';
import  { Provider }  from  'react-redux';
import store from './store.js';


class  App  extends  Component  {
  render()  {
      return  (
        <Provider store = {store}>
          <BrowserRouter>
            <Route  path=  "/signup"  component=  {SignUpContainer}  />
          </BrowserRouter>
        </Provider>
      );
  }
}

export  default  App;
