import React from "react";


class GeneralInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
            

        return(
            <>
            <input type="text" onChange={this.props.handler}></input>
            </>
        )
    }
}

export default GeneralInfo;