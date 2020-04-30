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

  }

  handleClickHost (){
    this.setState({event:'host'})
    localStorage.setItem("landing-event", "host");
    localStorage.setItem("game", "not-started");
  }

  handleClickJoin (){
    this.setState({event:'join'})
    localStorage.setItem("landing-event", "join");
    localStorage.setItem("game", "not-started");
  }


  render(){
    if (localStorage.getItem("landing-event") === 'host') { return (<HostPage parentCallback={this.props.parentCallback} />)}
    else if(localStorage.getItem("landing-event")=== 'join') { return(<JoinPage parentCallback ={this.props.parentCallback}/>)}
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
