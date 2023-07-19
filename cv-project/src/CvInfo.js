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
        
        let expData = this.props.info.expData;
        let ex = this.props.info.ex;

        let eres = [];

        for(let j = 1;j<=ex;j++){
            let obj = expData[j];
            if(obj){
            eres.push(
            <div>
                            <div key={uuidv4()}>{obj['cm']}</div>
                            <div key={uuidv4()}>{obj['tt']}</div>
                            <div key={uuidv4()}>{obj['res']}</div>
                            <div key={uuidv4()}>{obj['dow']}</div>
            </div>
            );
            }
        }

       

        

        
        return(
            <div className="cv">

                <h1>Curriculum Vitae</h1>
            <div className="pd">
                <div><h1>{name}</h1></div>

                <h3>{address} • {country} • {'+91 ' + phone} • {email}</h3>
                
            </div>


            <h3>Education</h3>
            <div className="cedu">
                

                {
                res.map((edu)=>{
                    return <div>{edu}</div>;
                })}
                
            </div>

            <div className="exp">{eres}</div>
            </div>
        )
    }
}

export default CvInfo;