import React from 'react'
import '../css/joinPage.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


class JoinPage extends React.Component{

  render(){
    return (
      <div className='container'>
      <div className='row Hicon'>
        <a href='/' onClick = {()=>localStorage.setItem("event", "")}><i class="fas fa-heading home"></i></a>

      </div>
      <div className='row Jnamer'>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Your name" />
          <Form.Text className="text-muted">
            your identity in game,You must have one
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Room ID" />
          <Form.Text className="text-muted">
            Room ID is provided by host
          </Form.Text>
        </Form.Group>

        <div className='buttonJ'>
          <Button variant="dark" type="submit">
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
