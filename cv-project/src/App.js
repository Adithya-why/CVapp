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
  
  putName(val){
    this.setState({
      data : this.state.data,
      name: val
    })
  }


  //function to change state everytime the button is clicked
  putData(){
    this.setState({
      data : {name: this.state.name},
      name: "",
      
    })
  }


  render(){
    return(
      <>
    
      <GeneralInfo handler={(e)=>this.putName(e.target.value)}  buttonHandler={()=>this.putData()}/>


      <CvInfo info={this.state}/>

      </>
    )
  }
}





export default App;
