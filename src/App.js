import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Admin  from './pages/admin/index'  //后台管理页面组件
import Login  from './pages/login/index'  //登录页面组件

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} ></Route>
          <Route path="/" component={Admin} ></Route>
        </Switch>
      </BrowserRouter>
    )
  }
} 

export default App;
