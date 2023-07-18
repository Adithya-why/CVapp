import React from "react";

import { v4 as uuidv4 } from 'uuid';


import "./styles/app.css";

import GeneralInfo from "./GeneralInfo";

import CvInfo from "./CvInfo";

import TopBar from "./TopBar";

import EduInfo from "./EduInfo";

import ExpPro from "./ExpPro";


 //app component holds the entire app
class App extends React.Component{
  constructor(props){
    super(props);

    //state is initalized
    this.state = {
      data : {},
      eduData : {},
      expData : {},
     n : 0,
     ex : 0,
    }
  }
  //function to update state everytime content in textbox is changed 
  
  putName(e){
    //gets the event object 
    //makes akey with name of class and puts given value in it
    //e.g name : abc;

    

    this.setState({
      data : this.state.data,
      
      [e.target.className]: e.target.value,
      
    })
  }
  


  //function to change state everytime the button is clicked
  putData(){
  
    this.setState({
      data : {
        name: this.state.name,
        country: this.state.country,
        address : this.state.address,
        email : this.state.email,
        phone : this.state.phone,
        },
        
      
    })
  }


    //function to add more educational info component

    //increases n value i state


    addEduInfo(){
      this.setState({
        
        n : this.state.n + 1,
      })
    }




//stores eduInfo in the edudata object
    storeEduInfo(e){
      this.setState({
        data : this.state.data,
        n : this.state.n,
        eduData : {...this.state.eduData, [this.state.n]: {...this.state.eduData[this.state.n], [e.target.className]: e.target.value}},
      })
    }


    addExpInfo(){
      this.setState({
        
        ex : this.state.ex + 1,
      })
    }


    storeExpInfo(e){
      this.setState({
        data : this.state.data,
        n : this.state.n,
        expData : {...this.state.expData, [this.state.ex]: {...this.state.expData[this.state.ex], [e.target.className]: e.target.value}},
      })
    }
  

  render(){

    //basically decides how many edu info comps are to be rendered based on n value in state
    let eduArr = [];

    for(let i = 0;i<this.state.n;i++){
      eduArr.push(<EduInfo changeHandler={(e)=>this.storeEduInfo(e)}  buttonHandler={()=>this.putData()} key={i} />)
    }

    let expArr = [];

    for(let j = 0;j<this.state.ex;j++){
      expArr.push(<ExpPro changeHandler={(e)=>this.storeExpInfo(e)}  buttonHandler={()=>this.putData()} key={j} />)
    }


    return(
      <>

      <TopBar/>
    
      <GeneralInfo changeHandler={(e)=>this.putName(e)}  buttonHandler={()=>this.putData()}/>
      
      
      <div className="edu">{eduArr}</div>
      
      

      <button onClick={()=>this.addEduInfo()}>Add Education</button>


      <div className="exp">{expArr}</div>

      <button onClick={()=>this.addExpInfo()}>Add Experience</button>

      <CvInfo info={this.state}/>

      

      

      </>
    )
  }
}





export default App;
