import React, { Component } from 'react'

import {Randomnumber,RemoveElement,VisitedCellCall} from './functions'
import '../css/ticketandnumber.css'

import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'



export class TicketAndNumber extends Component {
    constructor(){
        super()
        this.state = {
            shuffledArray:JSON.parse(localStorage.getItem('shuffle')) || Randomnumber(localStorage.getItem('seed')),
            numberGenerated:-5
        }  
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.generator(),
          1000
        );
      }
      generator = ()=>{
          this.setState({
            numberGenerated:JSON.parse(localStorage.getItem('shuffle'))[0]
          })
          if (JSON.parse(localStorage.getItem('shuffle'))[0] ==   undefined){
            localStorage.setItem('game','Finished')
          }
         RemoveElement(this.state.numberGenerated)
   }
      componentWillUnmount() {
        clearInterval(this.generator);
      }

      RenderList = (array) =>{
        const items =[]
        for (var i=0;i<3;i++ )
        {   
           items.push(
               <tr>{
                   array[i].map((item,idx) =>{
                       if(item ===-1 ){
                          return( <td className={`ticket-td`}></td>)
                           }
                           else{
                             if(item === this.state.numberGenerated) {
                               VisitedCellCall([i,idx],item)
                               localStorage.setItem(`${i}${idx}`,'found-ticket-td')
                               return (<td className={`${localStorage.getItem(`${i}${idx}`)}`}>{item}</td>)
                            }
                            else{
                              return( <td className={ 
                                  localStorage.getItem(`${i}${idx}`) === null ? 
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


    render() {
        return (<React.Fragment>
                  <div className='row ticket'>
                          <Table bordered>
                              <tbody>
                          {this.RenderList(this.props.ticket)}
                              </tbody>
                          </Table>
                  </div>
                  <div className="row cardBox" >
                  <Card style={{ width: '5rem' ,height:'5rem',textAlign:'center',display:'flex',justifyContent:'center'}}>
                    <Card.Body>
                        <span className="number">{this.state.numberGenerated === -5 ? 
                                <Spinner animation="border" variant="primary"> </Spinner> :
                                this.state.numberGenerated}</span>
                    </Card.Body>
                </Card>
                </div>
               
            </React.Fragment>
        )
    }
}

export default TicketAndNumber
