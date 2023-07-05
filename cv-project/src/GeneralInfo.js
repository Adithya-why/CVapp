import React from "react";


class GeneralInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){


        return(
            <>
            <input type="text" onChange={this.props.handler} className="name"></input>
            <button onClick={this.props.buttonHandler}>Submit</button>
            </>
        )
    }
}

export default GeneralInfo;