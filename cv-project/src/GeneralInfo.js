import React from "react";

//this component getd d=general data and updates the parent state
class GeneralInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){


        return(
            <div className="ginfo">
            
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={this.props.changeHandler} className="name" id="name"></input>
            </div>

            <div>
                <label htmlFor="country">Country</label>
                <input type="text" onChange={this.props.changeHandler} className="country" id="country"></input>
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <textarea onChange={this.props.changeHandler} className="address" id="address"></textarea>
            </div>


            <button onClick={this.props.buttonHandler} className="gbtn">Submit</button>
            </div>
        )
    }
}

export default GeneralInfo;