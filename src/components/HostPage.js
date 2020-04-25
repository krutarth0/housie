import React from 'react'
import '../css/hostPage.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

class HostPage extends React.Component{
  constructor(){
      super()
      this.state ={
        message: '',
        player_name:'Anonymous player'
        }

      
    }
  handleChange = (event)=> {
    this.setState({ [event.target.id] : event.target.value })
  }

  sendData = () => {
    this.props.parentCallback('hosted');
}


  handleSubmit = (event) => {
    event.preventDefault();
      axios.post(`https://housie-kalpit.herokuapp.com/host/${this.state.player_name}`)
      .then(res => console.log(res)
      )
      localStorage.setItem("event", "hosted")
      this.sendData()

    }


  render(){
    return (
      <div className='container'>
      <div className='row Hicon'>
        <a href='/' onClick = {()=>localStorage.setItem("event", "")}><i className="fas fa-heading home"></i></a>

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
export default HostPage;
