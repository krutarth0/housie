import React from 'react';
import LandingPage from './components/LandingPage'
import HostedLoby from './components/HostedLoby'
import JoinedLoby from './components/JoinedLoby'

class App extends React.Component{

    constructor(){
      super()
      this.state ={
        message: 'home',
        event:''
        }
      this.callbackFunction = this.callbackFunction.bind(this)
    }


callbackFunction = (childData) => {
      this.setState({event: childData})
}
  render(){
    console.log(this.state.event);
    
      if (this.state.event =='hosted' || localStorage.getItem("event") === 'hosted'){
        return (<HostedLoby parentCallback ={this.callbackFunction}/>)
      }
      else if(this.state.event =='joined' || localStorage.getItem("event") === 'joined'){
        return (<JoinedLoby parentCallback ={this.callbackFunction}/>)
      }
      else{
        return (<LandingPage parentCallback ={this.callbackFunction}/>)
      }
        
      
  }
}
export default App;
