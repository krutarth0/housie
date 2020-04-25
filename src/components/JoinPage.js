import React from 'react'
import '../css/joinPage.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import axios from 'axios';


class JoinPage extends React.Component{

    constructor(){
      super()
      this.state ={
        player_name:"Annonymous Player",
        room_id:" ",
        idError:"",
        idLengthError:""
      }
    }

  handleChange = (event)=> {
    this.setState({ [event.target.id] : event.target.value })
  }

  sendData = () => {
    this.props.parentCallback('joined');
}

  handleSubmit = (event) => {
       if(this.state.room_id == " "){
        event.preventDefault();
            this.setState({
              idError: 'id is required !dumbass where do we put you in? trash?',
              idLengthError:''
            })
       }
       else if (this.state.room_id.length < 36){
        event.preventDefault();
        this.setState({
          idError: '',
          idLengthError:'id is too short'
        })
       }
       else{
        event.preventDefault();
        axios.post(`https://housie-kalpit.herokuapp.com/join/${this.state.player_name}/${this.state.room_id}`)
        .then(res => {
          console.log(res)
          localStorage.setItem("host-response",JSON.stringify(res.data))
        })
        localStorage.setItem("event", "joined");
        this.sendData()
       }      

  
    }

    handleHome = () =>{
      localStorage.setItem("event", "")
      this.props.parentCallback('');

    }

  render(){
    
    
    return (
      <div className='container'>
      <div className='row Hicon'>
        <a href='/' onClick = {this.handleHome}><i className="fas fa-heading home"></i></a>

      </div>
      <div className='row Jnamer'>
      <Form>
        <Form.Group controlId="player_name">
          <Form.Control type="text" placeholder="Annonymous Player"  onChange={this.handleChange}/>
          <Form.Text className="text-muted">
           enter your identity,You should have one
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="room_id">
          <Form.Control type="text" placeholder="Room ID" onChange={this.handleChange}/>
          <Form.Text className="text-muted">
            {
            this.state.idError == '' ? 
              this.state.idLengthError == '' ? 'Room ID is provided by host' 
                :<span className="error-message"> {this.state.idLengthError} </span>           
              :<span className="error-message"> {this.state.idError} </span>
            }
          </Form.Text>
          
        </Form.Group>

        <div className='buttonJ'>
          <Button variant="dark" type="submit" onClick = {this.handleSubmit}>
            Join
          </Button>
        </div>
      </Form>
      </div>

      </div>
      );
  }
}
export default JoinPage;
