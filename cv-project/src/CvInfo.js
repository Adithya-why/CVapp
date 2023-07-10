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
        let email = this.props.info.data.email;
        let phone = this.props.info.data.phone;
        return(
            <>
            <div>{name}</div>
            <div>{country}</div>
            <div>{address}</div>
            <div>{email}</div>
            <div>{phone}</div>
            </>
        )
    }
}

export default CvInfo;