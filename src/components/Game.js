import React, { Component } from 'react'
import '../css/game.css'
import Table from 'react-bootstrap/Table'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import {Randomnumber,RemoveElement}  from '../functions'


export class Game extends Component {

    constructor(props){
        super(props)
        this.state = {
            shuffledArray:Randomnumber(JSON.parse(localStorage.getItem('seed'))),
            numberGenerated:0
        }  
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.generator(),
          4000
        );
      }

      generator = ()=>{
         this.setState(prev=>({
             numberGenerated:this.state.shuffledArray[0]
         }))
         RemoveElement(this.state.shuffledArray,this.state.numberGenerated)

   }

      componentWillUnmount() {
        clearInterval(this.generator);
      }
     
     NumberGen = ()=>{
            return this.state.shuffledArray[0]
     }
      handleHome = () =>{
        localStorage.clear()
        localStorage.setItem("event", "")
        this.setState({event:''}) 
      }
    render() {
        
        var data
        if (localStorage.getItem("join-event")==='joined'){
             data =JSON.parse(localStorage.getItem('join-response'))
        }
        else{
             data =JSON.parse(localStorage.getItem('host-response'))
        }
        var ticket = JSON.parse(localStorage.getItem('ticket')) 
        console.log(this.state.shuffledArray[0]);
        
        return (
            <div className='container'>
                    <div className='row Hicon'>
                        <a href='/' onClick = {this.handleHome}><i className="fas fa-heading home"></i></a>
                    </div>
                    <div className='row ticket'>
                        <Table bordered>
                                    <tr>
                                    {ticket[0].map(item =>item ==-1 ? <td></td> : <td>{item}</td>)}
                                    </tr>
                                    <tr>
                                    {ticket[1].map(item =>item ==-1 ? <td></td> : <td>{item}</td>)}
                                    </tr>
                                    <tr>
                                    {ticket[2].map(item =>item ==-1 ? <td></td> : <td>{item}</td>)}
                                    </tr>
                        
                        </Table>
                        </div>
                        <div className ='row numberGen' >
                             <Card style={{ width: '5rem' ,height:'5rem',textAlign:'center',display:'flex',justifyContent:'center'}}>
                            <Card.Body>
                                <Card.Text>
                                   <span className="number">{this.state.numberGenerated}</span>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                            <div class="mx-auto">
                            <Jumbotron >
                            <div className='rules'>
                            <Button className = 'rule-button' variant="secondary">King's Cornor</Button>&nbsp;&nbsp;
                            <Button className = 'rule-button'variant="secondary">Queen's Cornor</Button>{' '}<br/><br/>
                            <Button className = 'rule-button'variant="primary">BreakFast</Button>&nbsp;&nbsp;
                            <Button className = 'rule-button'variant="primary">Lunch</Button>&nbsp;&nbsp;
                            <Button className = 'rule-button'variant="primary">Dinner</Button><br/><br/>
                            <Button className = 'rule-button'variant="warning">1st Line</Button>&nbsp;&nbsp;
                            <Button className = 'rule-button'variant="warning">2nd Line</Button>&nbsp;&nbsp;
                            <Button className = 'rule-button'variant="warning">3rd Line</Button><br/><br/>
                            {/* <Button className = 'rule-button'variant="primary">Odd No</Button>&nbsp;&nbsp;
                            <Button className = 'rule-button'variant="secondary">Even No</Button>&nbsp; */}
                            <Button className = 'rule-button'variant="success">Full House</Button>&nbsp;
                            </div>
                            </Jumbotron>
                        </div>

                        <div className="mx-auto">
                        <Jumbotron >
                            <h2 className="leaderboard">Leader Board</h2>    
                        </Jumbotron>
                        </div>
            </div>
        )
    }
}

export default Game
