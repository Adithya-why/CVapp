import React from "react";

import { v4 as uuidv4 } from 'uuid';


import "./styles/app.css";

import GeneralInfo from "./GeneralInfo";

import CvInfo from "./CvInfo";

import TopBar from "./TopBar";

import EduInfo from "./EduInfo";


 //app component holds the entire app
class App extends React.Component{
  constructor(props){
    super(props);

    //state is initalized
    this.state = {
      data : {},
      name: "",
      n : 1,
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
      n:this.state.n,
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
        sch : this.state.sch,
        title : this.state.title,
        dos : this.state.dos,
        },
        n:this.state.n,
      
    })
  }


    //function to add more educational info component

    //increases n value i state
  addEduInfo(){
    this.setState({
      data : this.state.data,
      n: this.state.n + 1, 
    },()=>console.log(this.state.n));

    
  }


  render(){

    //basically decides how many edu info comps are to be rendered based on n value in state
    let eduArr = [];

    for(let i =0;i<this.state.n;i++){
      eduArr.push(<EduInfo changeHandler={(e)=>this.putName(e)} buttonHandler={()=>this.putData()} num={i} key={uuidv4()}/>);
     
    }


    return(
      <>

      <TopBar/>
    
      <GeneralInfo changeHandler={(e)=>this.putName(e)}  buttonHandler={()=>this.putData()}/>
      <hr></hr>
      
      
      {eduArr}
      

      <button onClick={()=>this.addEduInfo()}>Add</button>

      <CvInfo info={this.state}/>



      </>
    )
  }
}





export default App;
