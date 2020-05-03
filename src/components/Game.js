import React, { Component } from 'react'
import '../css/game.css'
import Table from 'react-bootstrap/Table'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Results from './Results'
import TicketAndNumber from './Ticket_and_Number'
import RuleButtons from './RuleButtons' 
import LeaderBoard from './LeaderBoard'



export default function Game() {

    var  Alert = (props)=> {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    var   handleHome = () =>{
        localStorage.clear()
        localStorage.setItem("event", "")
        this.setState({event:''}) 
      }
   
        console.log("bruh");
        
        var data
        if (localStorage.getItem("join-event")==='joined'){
             data =JSON.parse(localStorage.getItem('join-response'))
        }
        else{
             data =JSON.parse(localStorage.getItem('host-response'))
        }
        var ticket = JSON.parse(localStorage.getItem('ticket')) 
    
            if (localStorage.getItem('game')==='Finished'){
            return <Results /> 
            }else{
            
           return ( 
            <div className='container'>
                    <div className='row Hicon'>
                        <a href='/' onClick = {handleHome}><i className="fas fa-heading home"></i></a>
                    </div>
                    <TicketAndNumber ticket={ticket}/>
                    <RuleButtons ticket={ticket}/>
                    <LeaderBoard/>

            </div>
        )
    }
}