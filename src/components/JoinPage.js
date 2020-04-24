import React from 'react'
import '../css/hostPage.css'


class JoinPage extends React.Component{
    constructor(){
      super()
      this.state ={
        message: ''
        }
    }
  render(){
    return (
      <div className='container'>
      <div className='row Hicon'>
        <a href='/' onClick = {()=>localStorage.setItem("event", "")}><i class="fas fa-heading home"></i></a>

      </div>
      <div className ="row"><h1>Join</h1></div>
      </div>
      );
  }
}
export default JoinPage;
