import React, { Component } from 'react'
import axios from 'axios';

import Spinner from 'react-bootstrap/Spinner'
import '../css/loby.css'
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';


export default class Loby extends Component {

    constructor(props){
        super(props)
        this.state = {
            message:'',
            host_data: JSON.parse(localStorage.getItem('host-response'))
        }
    
    }
    sendData = () => {
        this.props.parentCallback(this.state.event);
   }

   componentDidMount(){
    axios.get(`https://housie-kalpit.herokuapp.com/getGame/${this.props.room_ID}`)
    .then(res=> {
        console.log(res)
        this.setState({host_data:res.data})
        localStorage.setItem("host-response",JSON.stringify(res.data))
    })  

   }

    render() {
        console.log(this.props);
        
        
        return (
            <div className='container'>
                <div className='row Hicon'>
                    <a href='/' onClick = {()=>{localStorage.setItem("event", "")
                                                localStorage.removeItem('host-response')}}><i className="fas fa-heading home"></i></a>
                </div>
                <div className='title'>
                        <div> <h4>Room ID :</h4>

                        <h5>{this.state.host_data!==null? <p>{this.state.host_data.id}</p> 
                                : <Spinner animation="grow" variant="primary"> </Spinner>}</h5>
                         </div>
                        
                </div>

                <div className='joinded-players'>
                    <h3>Players in the loby:</h3>
                {this.state.host_data!==null? this.state.host_data.players.map( 
                    items=>
                            <Chip
                            avatar={<Avatar>{items.charAt(0)}</Avatar>}
                            label={items}
                            clickable
                            variant="outlined"
                            />
                    )         
                    : <Spinner animation="border" variant="primary"> </Spinner>}

                </div>

                <div className='host'>
                    <h3>Host:
                {this.state.host_data!==null? <p>{this.state.host_data.host}</p> : null}
                    </h3>
                    {this.props.event == 'hosted' ?  <Button variant="contained" color="secondary"> Host   </Button>   :null}
                </div>
        
                
            </div>
        )
    }
}
