import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import '../css/leaderboard.css'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: '#e1bee7',
      backgroundColor: '#e1bee7',
      size: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    }
  }));

export default function LeaderBoard() {
    const classes = useStyles();

    var data
    if (localStorage.getItem("join-event")==='joined'){
         data =JSON.parse(localStorage.getItem('join-response'))
    }
    else{
         data =JSON.parse(localStorage.getItem('host-response'))
    }

    var  avatar 
    return (
      <Container>
        <Jumbotron >
            <h2 className="leaderboard">Leader Board</h2>
            <div className="list">
              {Object.keys(data.leaderboard).map(rule =>{
              return (
                <div className="item">
                <div className='pic' style={{backgroundImage:`url(${require('../Letter-F-icon.png')})`}}> </div>
              <div className='name'> {data.leaderboard[rule]}</div>
              <div className='name won'> {rule}</div>
            </div>
              )}
                )}
            </div>  
        </Jumbotron>
        </Container>
    )
}
