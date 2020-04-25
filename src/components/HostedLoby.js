import React, { Component } from 'react'
import '../css/joined_loby.css'


export default class HostedLoby extends Component {

    constructor(){
        super()
        this.state = {
            message:''
        }
    }

    sendData = () => {
        this.props.parentCallback(this.state.event);
   }

    render() {
        return (
            <div>
                <div className='row Hicon'>
                    <a href='/' onClick = {()=>localStorage.setItem("event", "")}><i className="fas fa-heading home"></i></a>
                </div>
                <h1>Hosted LOBY</h1>
            </div>
        )
    }
}
