import React, { Component } from 'react'
import '../css/results.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

import LeaderBoard from './LeaderBoard'
export class Results extends Component {

    handleHome = () =>{
        localStorage.clear()
        localStorage.setItem("event", "")
        this.setState({event:''}) 
      }
      
    render() {
        return (
            <div className='container'>
                <div className='row Hicon'>
                    <a href='/' onClick = {this.handleHome}><i className="fas fa-heading home"></i></a>
                </div>

                <LeaderBoard/>
            </div>
        )
    }
}

export default Results
