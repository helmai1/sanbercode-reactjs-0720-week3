import React, { Component } from 'react';

class Timer extends Component{
    constructor(props){
      super(props)
      this.state = {
        time: 100,
      }
    }
  
    componentDidMount(){
      if (this.props.start !== undefined){
        this.setState({time: this.props.start})
      }
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        time: this.state.time - 1 
      });
    } 

    jam(){
        var date = new Date();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var tampilWaktu = "Jam: " + jam + ":" + menit + ":" + detik;
        return <h1>{tampilWaktu}</h1>
        
    }

    render(){
      return(
        <>
          <h1 style={{textAlign: "center"}}>
            Hitung mundur {this.state.time}
            {this.jam()}
          </h1>
        </>
      )
    }
  }
  
export default Timer