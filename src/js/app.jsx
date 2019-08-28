import React from "react";
import ReactDom from "react-dom";
import List from "./list.jsx";
import Detail from "./detail.jsx"

class App extends React.Component{

    constructor() {
        super();
        this.state={
            arr : ["Rohit Dimri", "Tanmay Sharma", "Sourabh Narhe"],
            selected : 0
        }
    }

    updateArrayValue(changedValue){
        let updated = this.state.arr;
        updated[this.state.selected] = changedValue;
        this.setState({
            arr : updated
        });
    }

    updateSelected(index) {
       
        this.setState({
            selected : index
        });
    }
    
    render()
    {
        return (<div>
            <List users={this.state.arr} funcupdateSelected={this.updateSelected.bind(this)}/>
            <Detail users={this.state.arr[this.state.selected]} funcupdateArray={this.updateArrayValue.bind(this)}/>
        </div>)
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('content')
);