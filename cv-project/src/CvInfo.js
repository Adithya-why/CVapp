import React from "react";
//this component gets infor from state and renders the actual cv
class CvInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        let name = this.props.info.data.name;
        let country = this.props.info.data.country;
        let address = this.props.info.data.address;
        return(
            <>
            <div>{name}</div>
            <div>{country}</div>
            <div>{address}</div>
            </>
        )
    }
}

export default CvInfo;