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
        

        let eduData = this.props.info.eduData;

        let n = this.props.info.n;
        let res = [];
       
        for(let i = 1;i<=n;i++){
            let obj = eduData[i];
            if(obj){
            res.push(<div key={uuidv4()}>{obj['sch']}</div>);
            res.push(<div key={uuidv4()}>{obj['title']}</div>);
            res.push(<div key={uuidv4()}>{obj['dos']}</div>);
            }
        }
        console.log(res);

       

        

        
        return(
            <>
            <div>{name}</div>
            <div>{country}</div>
            <div>{address}</div>
            <div>{email}</div>
            <div>{phone}</div>
            {res}

            
            </>
        )
    }
}

export default CvInfo;