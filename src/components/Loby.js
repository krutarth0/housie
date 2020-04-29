import React, { Component } from 'react'
import axios from 'axios';

import Spinner from 'react-bootstrap/Spinner'
import '../css/loby.css'
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import FileCopyIconOutlined from '@material-ui/icons/FileCopy';



export default class Loby extends Component {

    constructor(props,context){
        super(props,context)
        this.state = {
            recurent_data:'',
            visible:false
            }
    
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.period_fetch(),
          3000
        );
      }



   period_fetch = ()=>{
        axios.get(`https://housie-kalpit.herokuapp.com/getGame/${JSON.parse(localStorage.getItem('room_ID'))}`)
        .then(res=> {
            if (res !== undefined || res !== null){
                console.log('res',res);
                if (localStorage.getItem('host-response')!==null){
                    localStorage.setItem("host-response",JSON.stringify(res.data))
                }
                else{
                    localStorage.setItem("join-response",JSON.stringify(res.data))
                }
               
                this.setState({
                    recurent_data:'data fetched'
                })
            };
        })  
   }


   copy=(text)=> {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    // setTimeout(()=> window.alert('copied!'),1000)
    // window.setTimeout(function() {
    //     $(".alert").fadeTo(500, 0).slideUp(500, function(){
    //         $(this).remove(); 
    //     });
    // }, 2000);
    this.setState({visible:true},()=>{
        window.setTimeout(()=>{
          this.setState({visible:false})
        },1000)
      });
      
  }
  

   handleHome = () =>{
    localStorage.clear()
    localStorage.setItem("event", "")
    this.setState({event:''}) 
  }


    render() {
        console.log(this.state.visible);
        
        var data
        if (localStorage.getItem("join-event")==='joined'){
             data =JSON.parse(localStorage.getItem('join-response'))

        }
        else{
             data =JSON.parse(localStorage.getItem('host-response'))
        }
    
        var recurent_data = JSON.parse(localStorage.getItem('recurent-data'))

        var alert = this.state.visible ? 'copied' : null
        if (localStorage.getItem("host-event") === 'hosted') {
            return (
                <div className='container'>
                    <div className='row Hicon'>
                        <a href='/' onClick = {this.handleHome}><i className="fas fa-heading home"></i></a>
                    </div>
                    <div className='title'>
                    
                        <div> <h4>Room ID :</h4>
                        <h5>{data!==null? <p id = 'Room-id'>{data.id}</p>: <Spinner animation="grow" variant="primary"> </Spinner>}</h5>
                        {document.queryCommandSupported('copy') && 
                            <div className='copy' onClick= {()=>this.copy(data.id)}><FileCopyIconOutlined /> </div>}
                            <p className='alert'>&nbsp;{alert}</p>
                             </div>
                                 
                    </div>
    
                    <div className='joinded-players'>
                     <p className='player-legend'>Players in the loby : {data.players.length}</p>
                    {data!==null || data!==undefined? data.players.map( 
                        items=>
                                <Chip
                                key={items}
                                avatar={<Avatar>{items.charAt(0)}</Avatar>}
                                label={items}
                                clickable
                                variant="outlined"
                                />
                        )         
                        : <Spinner animation="border" variant="primary"> </Spinner>}
    
                    </div>
    
                    <div className='host'>
                        <h3>Host:
                    {data!==null? <p>{data.host}</p> : null}
                        </h3>
                         <Button variant="contained" color="secondary"> Host </Button> 
                    </div>
            
                    
                </div>
            )
        }

        else{
            return (
                <div className='container'>
                    <div className='row Hicon'>
                        <a href='/' onClick = {this.handleHome}><i className="fas fa-heading home"></i></a>
                    </div>
                    <div className='title'>
                            <div> <h4>Room ID :</h4>
                            <h5>{data!==null? <p>{data.id}</p>: <Spinner animation="grow" variant="primary"> </Spinner>}</h5>
                            {document.queryCommandSupported('copy') && 
                            <div className='copy' onClick= {()=>this.copy(data.id)}><FileCopyIconOutlined /> </div>}
                            <p className='alert'>&nbsp;{alert}</p>
                             </div>
                            
                    </div>
    
                    <div className='joinded-players'>
                        
                            <p className='player-legend'>Players in the loby : {data.players.length}</p>
                            {data!==null || data!==undefined? data.players.map( 
                                items=><span className='chips'>
                                        <Chip 
                                        
                                        key={items}
                                        avatar={<Avatar>{items.charAt(0)}</Avatar>}
                                        label={items}
                                        clickable
                                        variant="outlined"
                                        />
                                        </span>
                                        
                                )         
                                : <Spinner animation="border" variant="primary"> </Spinner>}
                    
                    </div>
    
                    <div className='host'>
                        <h3>Host:
                    {data!==null? <p>{data.host}</p> : null}
                        </h3>
                        
                    </div>
            
                    
                </div>
            )
        }

    }
}
