import React from 'react';
import LandingPage from './components/LandingPage'

class App extends React.Component{

    constructor(){
      super()
      this.state ={
        message: 'home'
        }
      this.callbackFunction = this.callbackFunction.bind(this)
    }


callbackFunction = (childData) => {
      this.setState({message: childData})
}
  render(){
    return (
        <LandingPage parentCallback ={this.callbackFunction}/>
      );
  }
}
export default App;
