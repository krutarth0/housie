import React from 'react'
import '../css/hostPage.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

import Loby from './Loby'

class HostPage extends React.Component{
  constructor(props){
      super(props)
      this.state ={
        host_event: '',
        player_name:'Anonymous player',
        data:''
        }

      
    }
  handleChange = (event)=> {
    this.setState({ [event.target.id] : event.target.value })
  }


  handleSubmit = (event) => {
    event.preventDefault()
      axios.post(`https://housie-kalpit.herokuapp.com/host/${this.state.player_name}`)
      .then(res =>{
        localStorage.setItem("host-response",JSON.stringify(res.data))
        localStorage.setItem("ticket",JSON.stringify(res.data.ticket))
        localStorage.setItem("room_ID",JSON.stringify(res.data.id))
        localStorage.setItem("seed",JSON.stringify(res.data.seed))
        localStorage.setItem("host-event", "hosted")
        localStorage.setItem("game", "not-started");
        this.setState({host_event:'hosted'}) 
      })
    }

    handleHome = () =>{
      localStorage.clear()
      localStorage.setItem("event", "")
      this.setState({event:''}) 
    }

  render(){    
    if (localStorage.getItem("host-event") === 'hosted') { return (<Loby event={this.state.event} />)}
    else{
    return (
      <div className='container'>
      <div className='row Hicon'>
        <a href='/' onClick = {this.handleHome}><i className="fas fa-heading home"></i></a>

      </div>
      <div className='row namer'>
      <Form>
        <Form.Group controlId="player_name">
          <Form.Control type="text" placeholder="Anonymous player" onChange={this.handleChange}/>
          <Form.Text className="text-muted">
         Enter your identity ,You should have one. e.g: Noobmaster69
          </Form.Text>
        </Form.Group>

        <div className='buttonH'>
          <Button variant="dark" type="submit" onClick = {this.handleSubmit}>
            Host
          </Button>
        </div>
      </Form>
      </div>
      </div>
      );
    }
  }
}
export default HostPage;
