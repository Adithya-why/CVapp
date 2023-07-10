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
        let sch = this.props.info.data.sch;
        let title = this.props.info.data.title;
        let dos = this.props.info.data.dos;
        return(
            <>
            <div>{name}</div>
            <div>{country}</div>
            <div>{address}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{sch}</div>
            <div>{title}</div>
            <div>{dos}</div>
            </>
        )
    }
}

export default CvInfo;