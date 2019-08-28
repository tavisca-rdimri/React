import React from "react";

class List extends React.Component{
    
    render()
    {
        const userList = this.props.users;
        return (
        <div className="left-container">
            {userList.map((data, index) => (
                <div className="list-content" id={`${index}`} onClick={()=>this.props.funcupdateSelected(index)}>
                    <h3>{data}</h3>
                </div>
            ))}
        </div>)
    };

}

export default List;