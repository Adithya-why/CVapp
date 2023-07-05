import React from "react";
//this component gets infor from state and renders the actual cv
class CvInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        let name = this.props.info.data.name;
        let country = this.props.info.data.country;
        return(
            <>
            <div>{name}</div>
            <div>{country}</div>
            </>
        )
    }
}

export default CvInfo;