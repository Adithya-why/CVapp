import React from "react";

import GeneralInfo from "./GeneralInfo";


class App extends React.Component{
  constructor(props){
    super(props);


    this.state = {name : ""}
  }

  putName(val){
    this.setState({
      name: val
    })
  }


  render(){
    return(
      <>
      <div>Hello {this.state.name}</div>
      <GeneralInfo handler={(e)=>this.putName(e.target.value)}/>
      </>
    )
  }
}





export default App;
