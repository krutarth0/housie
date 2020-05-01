import React, { Component } from 'react'
import '../css/game.css'
import Table from 'react-bootstrap/Table'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'

import {Randomnumber,
        RemoveElement,
         shuffle, // <----------------------------------------------------------------------------  
            VisitedCellCall,
            VisitedCells,
            ticketBool,
            KingsCorner,
            QueensCorner,
            Breakfast}  from '../functions'

import Results from './Results'


export class Game extends Component {

    constructor(props){
        super(props)
        this.state = {
            shuffledArray:Randomnumber(JSON.parse(localStorage.getItem('seed'))),
            numberGenerated:-5,   
        }  
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.generator(),
          5000
        );
      }

      generator = ()=>{
         this.setState(prev=>({
             numberGenerated:this.state.shuffledArray[0]
         }))

         RemoveElement(this.state.numberGenerated)
        if (this.state.numberGenerated == undefined){
             localStorage.setItem('game','Finished')
         }  
   }
      componentWillUnmount() {
        clearInterval(this.generator);
      }
     
     NumberGen = ()=>{
            return this.state.shuffledArray[0]
     }

     RenderList = (array) =>{
         const items =[]
         for (var i=0;i<3;i++ )
         {   
            items.push(
                <tr>{
                    array[i].map((item,idx) =>{
                        if(item ==-1 ){
                           return( <td className={`ticket-td`}></td>)
                            }
                            else{
                              if(item == this.state.numberGenerated) {
                                VisitedCellCall([i,idx],item)
                                localStorage.setItem(`${i}${idx}`,'found-ticket-td')
                                return (<td className={`${localStorage.getItem(`${i}${idx}`)}`}>{item}</td>)
                             }
                             else{
                               return( <td className={ 
                                   localStorage.getItem(`${i}${idx}`) == null ? 
                                   'ticket-td' :
                                   `${localStorage.getItem(`${i}${idx}`)}`
                                    }>{item}</td>) 
                                 }
                            }
                        })
                    }
                </tr>
            )
         }
        return items
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
    
            if (localStorage.getItem('game')=='Finished'){
                return( <Results /> )
            }else{
            console.log(VisitedCells);
            
           return ( 
            <div className='container'>
                    <div className='row Hicon'>
                        <a href='/' onClick = {this.handleHome}><i className="fas fa-heading home"></i></a>
                    </div>
                    <div className='row ticket'>
                        <Table bordered>

                        {this.RenderList(ticket)}

                        </Table>
                        </div>
                        <div className ='row numberGen' >
                             <Card style={{ width: '5rem' ,height:'5rem',textAlign:'center',display:'flex',justifyContent:'center'}}>
                            <Card.Body>
                                <Card.Text>
                                   <span className="number">{this.state.numberGenerated == -5 ? 
                                   <Spinner animation="border" variant="primary"> </Spinner> :
                                   this.state.numberGenerated}</span>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                            <div class="mx-auto">
                            <Jumbotron >
                            <div className='rules'>
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button' variant="secondary"  
                                    onClick = {() => {
                                        console.log('KingsCorner clicked');
                                        
                                        //KingsCorner(ticket) 
                                    }}>
                            King's Cornor</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="secondary"
                                onClick = {() => {
                                    console.log('QueensCornerclicked');
                                    
                                   // QueensCorner()
                                }}>
                            Queen's Cornor</Button>{' '}<br/><br/>
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="primary"
                            onClick = {()=>{
                                console.log('BreakFast clicked',Breakfast(ticket));
                            }}>
                            BreakFast</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="primary"
                            onClick = {()=>{
                                console.log('Lunch clicked');
                            }}>
                            Lunch</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="primary"
                            onClick = {()=>{
                                console.log('Dinner clicked');
                            }}>
                            Dinner</Button><br/><br/>
{/* ===================================================================================================================== */}
                            <Button className = 'rule-button'variant="warning"
                            onClick = {()=>{
                                console.log('1st Line clicked');
                            }}>
                            1st Line</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}                            
                            <Button className = 'rule-button'variant="warning"
                            onClick = {()=>{
                                console.log('2nd Line clicked');
                            }}>
                            2nd Line</Button>&nbsp;&nbsp;
{/* ===================================================================================================================== */}                            
                            <Button className = 'rule-button'variant="warning"
                            onClick = {()=>{
                                console.log('3rd Line clicked');
                            }}>
                            3rd Line</Button><br/><br/>
{/* ===================================================================================================================== */}                            
                            {/* <Button className = 'rule-button'variant="primary">Odd No</Button>&nbsp;&nbsp;
                            <Button className = 'rule-button'variant="secondary">Even No</Button>&nbsp; */}
{/* ===================================================================================================================== */}                            
                            <Button className = 'rule-button'variant="success"
                            onClick = {()=>{
                                console.log( 'Full House clicked');
                                
                            }}>
                            Full House</Button>&nbsp;
{/* ===================================================================================================================== */}                            
                            </div>
                            </Jumbotron>
                        </div>

                        <div >
                        <Jumbotron >
                            <h2 className="leaderboard">Leader Board</h2>    
                            
                        </Jumbotron>
                        </div>
            </div>
        )
    }
    }
}

export default Game
