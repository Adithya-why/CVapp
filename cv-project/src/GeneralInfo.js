import React from "react";

//this component getd d=general data and updates the parent state
class GeneralInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){


        return(
            <>
            <input type="text" onChange={this.props.handler} className="name"></input>
            <input type="text" onChange={this.props.handler} className="country"></input>
            <button onClick={this.props.buttonHandler}>Submit</button>
            </>
        )
    }
}

export default GeneralInfo;