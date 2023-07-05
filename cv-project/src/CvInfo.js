import React from "react";

class CvInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        let name = this.props.info.data.name;
        return(
            <>
            <div>{name}</div>
            </>
        )
    }
}

export default CvInfo;