import React from 'react';
import LandingPage from './components/LandingPage'
import Loby from './components/Loby'

class App extends React.Component{

    constructor(props){
      super(props)
      this.state ={
        message: 'home',
        event:'',
        res:localStorage.getItem('host-response')
        }
      this.callbackFunction = this.callbackFunction.bind(this)
    }


callbackFunction = (childData) => {
      this.setState({event: childData[0],room_ID:childData[1]})
}
  render(){
      if (this.state.event =='hosted' || localStorage.getItem("event") === 'hosted'){
        return (<Loby parentCallback ={this.callbackFunction} event = 'hosted' room_ID = {this.state.room_ID}/>)
      }
      else if(this.state.event =='joined' || localStorage.getItem("event") === 'joined'){
        return (<Loby parentCallback ={this.callbackFunction} event = 'joined'/>)
      }
      else{
        return (<LandingPage parentCallback ={this.callbackFunction}/>)
      }
        
      
  }
}
export default App;
