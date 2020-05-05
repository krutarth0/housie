import React,{useState} from 'react'
import axios from 'axios'

import Spinner from 'react-bootstrap/Spinner'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {KingsCorner,
        QueensCorner,
        FullHouse,
        ThirdLine,
        SecondLine,
        FirstLine,
        Dinner,
        Lunch,
        Breakfast} from './functions'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
export default function RuleButtons(props) {

   
    const [open, setOpen] = useState(false);
    const [SnackbarType,setSnackbarType] = useState('error')
    const [SnackbarMessage,setSnackbarMessage] = useState('False claims may expel you from the party')
  
    const handleClick = (rule,checkFor) => {
      var LocalcheckFor = localStorage.getItem(rule)
      var room_ID = localStorage.getItem('room_ID')
      setSnackbarType('loading') 
      if(LocalcheckFor === 'true')
       { 
           axios.post(`https://housie-kalpit.herokuapp.com/addWinner/${room_ID.slice(1,room_ID.length-1)}`,
            {
            playerName : localStorage.getItem("player_name"),
            wonRule : rule
            }
           )
           .then(res => {
               if (res.data === 'won' ){
                setSnackbarType('success') 
                setSnackbarMessage(`you succesfully claimed  ${rule}`)
               }
               else{
                setSnackbarType('info') 
                setSnackbarMessage(` Better Luck next time, someone has already claimed  ${rule}`)
               }
           })
           .catch(err => console.log(err))

    }
       else
       { 
           setSnackbarType('error')
           setSnackbarMessage( ' False claims may expel you from the party ' )
    }
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return (
        
                        <div class="mx-auto">
                            <Jumbotron >
                            <div className='rules'>
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button' variant="secondary"  
                                    onClick = {() => {
                                        handleClick('KingsCorner',KingsCorner(props.ticket))
                                    }}>
                            King's Corner</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="secondary"
                                onClick = {() => {
                                    handleClick('QueensCorner',QueensCorner(props.ticket))
                                }}>
                            Queen's Corner</Button>{' '}<br/><br/>
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="primary"
                            onClick = {()=>{
                                handleClick('Breakfast',Breakfast(props.ticket))
                            }}>
                            BreakFast</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="primary"
                            onClick = {()=>{
                                handleClick('Lunch',Lunch(props.ticket))
                            }}>
                            Lunch</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="primary"
                            onClick = {()=>{
                                handleClick('Dinner',Dinner(props.ticket))
                                // console.log('Dinner clicked',dinner(ticket));
                            }}>
                            Dinner</Button><br/><br/>
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="warning"
                            onClick = {()=>{
                                handleClick('FirstLine',FirstLine(props.ticket))
                                // console.log('1st Line clicked',firstLine(ticket));
                            }}>
                            1st Line</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}                            
                            <Button className = 'rule-button'variant="warning"
                            onClick = {()=>{
                                handleClick('SecondLine',SecondLine(props.ticket))
                                // console.log('2nd Line clicked',secondLine(ticket));
                            }}>
                            2nd Line</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}                            
                            <Button className = 'rule-button'variant="warning"
                            onClick = {()=>{
                                handleClick('ThirdLine',ThirdLine(props.ticket))
                                // console.log('3rd Line clicked',thirdLine(ticket));
                            }}>
                            3rd Line</Button><br/><br/>
{/* ===================================================================================================================== */}                            
                            {/* <Button className = 'rule-button'variant="primary">Odd No</Button>&nbsp;&nbsp;
                            <Button className = 'rule-button'variant="secondary">Even No</Button>&nbsp; */}
{/* ===================================================================================================================== */}                            
                            <Button className = 'rule-button'variant="success"
                            onClick = {()=>{
                                handleClick('FullHouse',FullHouse(props.ticket))
                                // console.log( 'Full House clicked',fullHousie(ticket));
                                
                            }}>
                            Full House</Button>&nbsp;
{/* ===================================================================================================================== */}                            
                            </div>
                            </Jumbotron>
                            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                            {
                                SnackbarType === 'loading' ? 
                                    <Spinner animation="border" variant="secondary" role="status">
                                    <span className="sr-only">Loading...</span>
                                    </Spinner>
                                                            :
                                    <Alert onClose={handleClose} severity={SnackbarType}>
                                    {SnackbarMessage}
                                    </Alert>
                            }
                            </Snackbar>

                        </div>
        
    )
}
