import React from "react";
import { v4 as uuidv4 } from 'uuid';

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

        let n = this.props.info.n;

        let renderList = [];

        for(let i =0;i<n;i++){
        let sch = this.props.info.data['sch'+i];
        let title = this.props.info.data['title' + i];
        let dos = this.props.info.data['dos' + i];

        renderList.push(<div key={uuidv4()}>{sch}</div>);
        renderList.push(<div key={uuidv4()}>{title}</div>);
        renderList.push(<div key={uuidv4()}>{dos}</div>)
        }

        
        return(
            <>
            <div>{name}</div>
            <div>{country}</div>
            <div>{address}</div>
            <div>{email}</div>
            <div>{phone}</div>


            {renderList}
            </>
        )
    }
}

export default CvInfo;