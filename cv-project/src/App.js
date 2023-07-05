import React from "react";

import GeneralInfo from "./GeneralInfo";

import CvInfo from "./CvInfo";


 //app component holds the entire app
class App extends React.Component{
  constructor(props){
    super(props);


    this.state = {
      data : {},
      name: "",
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
      data : {name: this.state.name, country: this.state.country},
      
    })
  }


  render(){
    return(
      <>
    
      <GeneralInfo handler={(e)=>this.putName(e)}  buttonHandler={()=>this.putData()}/>


      <CvInfo info={this.state}/>

      </>
    )
  }
}





export default App;
