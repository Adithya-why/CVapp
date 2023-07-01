import React from "react";


class App extends React.Component{
  constructor(props){
    super(props);


    this.state = {name : "jajajaja"}
  }



  render(){
    return(
      <>
      <div>Hello {this.state.name}</div>
      </>
    )
  }
}





export default App;
