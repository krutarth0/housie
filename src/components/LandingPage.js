import  React from 'react'
import logo from '../logo.svg';
import '../css/landingPage.css'
import Button from 'react-bootstrap/Button';

import HostPage from './HostPage'
import JoinPage from './JoinPage'

class LandingPage extends React.Component{
  constructor(){
    super()
    this.state = {
      event: ''
    }
    this.handleClickHost = this.handleClickHost.bind(this)
    this.handleClickJoin = this.handleClickJoin.bind(this)
    this.sendData = this.sendData.bind(this)
  }

  handleClickHost (){
    this.setState({event:'host'})
    localStorage.setItem("event", "host");
  }

  handleClickJoin (){
    this.setState({event:'join'})
    localStorage.setItem("event", "join");
  }

  sendData = () => {
         this.props.parentCallback(this.state.event);
    }

    callbackFunction = (childData) => {
      console.log(childData);
          this.setState({event: childData})

    }
    componentDidMount() {
      localStorage.setItem("event", "");
    }
  render(){
    console.log(this.callbackFunction);
    if (localStorage.getItem("event") === 'host') { return (<HostPage parentCallback={this.callbackFunction} />)}
    else if(localStorage.getItem("event")=== 'join') { return(<JoinPage parentCallback ={this.callbackFunction}/>)}
    else {
      return(
         <React.Fragment>
         <div className="row logo"> <img src={logo} className="App-logo" alt="logo" /></div>
          <div className="row nav">
           <div className="col host-col">
             <Button size="lg" variant="outline-dark" onClick={this.handleClickHost}>Host
             </Button>
           </div>
          <div className="col join">
           <Button size="lg" variant="outline-dark" onClick={this.handleClickJoin}>join
           </Button></div>
         </div>
         </React.Fragment>
       )
    }
  }
}

export default LandingPage
