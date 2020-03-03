import React,{Component} from 'react';
import {Button, message} from 'antd'
class App extends Component{
  handClick = ()=>{
    message.success('成功啦。。。')
  }

  render(){
    return (
      <div>
        <Button type="primary" onClick={this.handClick}>button</Button>
      </div>
    )
  }
} 

export default App;
