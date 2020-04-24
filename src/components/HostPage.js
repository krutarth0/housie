import React from 'react'
import '../css/hostPage.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class HostPage extends React.Component{
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
      <div className='row namer'>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Your name" />
          <Form.Text className="text-muted">
          your identity in game,You must have one
          </Form.Text>
        </Form.Group>

        <div className='buttonH'>
          <Button variant="dark" type="submit">
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
