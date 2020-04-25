import React, { Component } from 'react'
import '../css/hosted_loby.css'


export default class JoinedLoby extends Component {

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
                <h1>  JOINED LOBY</h1>
            </div>
        )
    }
}
