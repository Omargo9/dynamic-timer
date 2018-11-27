import React, { Component } from 'react';



    

class Second extends React.Component {
    state = {
        sec: 0,
        min: 0,
        hour: 0,
        
       command:"Start",
       start:false
    
    }


    change=()=>{
        if(this.state.command==="Start"){
      this.setState({
        
        command:"Stop",
        start:true
    
    });}
    else {
    
        this.setState({
          
          command:"Start",
          start:false
      
      });}
  
    }
    reset=()=>{
        this.setState({
          sec: 0,
          min: 0,
          hour: 0,  
          });
    
      }
    
   
    
    componentDidMount() {
       
        
        setInterval(() => {
          
                
    
        
    
            if(this.state.start){
           
            
            
            if (this.state.hour === 24) {
                this.setState({
                    hour: 0,
                    
                })} 
                

            else if (this.state.min === 60) {
                this.setState({
                    hour: this.state.hour + 1,
                    min:0
                })}
            else if (this.state.sec === 59) {
                this.setState({
                    min: this.state.min + 1,
                    sec:0,
                    
                })}
                
                
                
                
                else{ 
                     this.setState({
                    sec:this.state.sec + 1
    
                });
            }
    
           
        }

        }, 100);
        
          
    }


        render() {
            return (<div className="Crono">
                <div className="Time">
                    <span className="Hour">{this.state.hour>9?this.state.hour:"0"+this.state.hour}</span>
                    <span>:</span>
                    <span className="Minute">{this.state.min>9?this.state.min:"0"+this.state.min}</span>
                    <span>:</span>
                    <span className="Second">{this.state.sec>9?this.state.sec:"0"+this.state.sec}</span>
                    
                </div>
                  <div className="Time-unit">
                  <span>Hour</span>
                  <span>Minute</span>
                  <span>Second</span>
                  </div>
                  <div className="Actions">
                  <input className="btn btn-secondary btn-sm" type="button" value={this.state.command} onClick={this.change} />
                  <input className="btn btn-secondary btn-sm" type="button" value="Reset" onClick={this.reset}/>
                  </div>
                  </div>
            );
        }
    }

    export default Second;


