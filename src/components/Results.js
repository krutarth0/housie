import React, { Component } from 'react'
import '../css/results.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

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

                <div className="mx-auto">
                    <Jumbotron >
                        <h2 className="result-leaderboard">Leader Board</h2>    
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

export default Results
