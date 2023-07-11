import React from "react";

//this component lets you add educational qualifications
class EduInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        let num = this.props.num;
        return(
            <>
            <div className="einfo">
                <label htmlFor="sch">School Name</label>
                <input type="text" onChange={this.props.changeHandler} className={'sch'+ num} id="sch"></input>
            </div>

            <div>
                <label htmlFor="title">Title of study</label>
                <input type="text" onChange={this.props.changeHandler} className={"title"+num} id="title"></input>
            </div>

            <div>
                <label htmlFor="dos">Title of study</label>
                <input type="date" onChange={this.props.changeHandler} className={"dos"+num} id="dos"></input>
            </div>

            <button onClick={this.props.buttonHandler}>Submit</button>

           
            </>
        )
    }
}


export default EduInfo;