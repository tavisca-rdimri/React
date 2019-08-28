import React from "react";

class Detail extends React.Component{

    constructor(props) {
        super();
        //let names = props.users.split(" ");
        this.state = {
            firstname: props.users.split(" ")[0],
            lastname: props.users.split(" ")[1]
        }
        
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({
            firstname : newProps.users.split(" ")[0],
            lastname : newProps.users.split(" ")[1]
        })
    }

    render()
    {
        return (
        <div className="right-container">
            <label>First Name : </label>
            <input type="text" value={this.state.firstname} onChange={e=>this.setState({firstname: e.target.value})}/>
            <br/><br/>
            <label>Last Name : </label>
            <input type="text" value={this.state.lastname} onChange={e=>this.setState({lastname: e.target.value})}/>
            <br/><br/>
            <button onClick={()=>this.props.funcupdateArray(this.state.firstname+" "+this.state.lastname)}>Update</button>
        </div>)
    };

}

export default Detail;