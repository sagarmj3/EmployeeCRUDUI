import React from 'react';

class ButtonComponent extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = (name) => {
            this.props.handleButtonClick(name);
        }
    }
    render(){
        return (
            <div className="ui center aligned segment">
                <div className="">
                    <button onClick={() => this.handleClick('add')} className="ui button">Add Employee</button>
                    <button onClick={() => this.handleClick('get')} className="ui button">Get Employee</button>
                    <button onClick={() => this.handleClick('update')} className="ui button">Update Employee</button>
                    <button onClick={() => this.handleClick('delete')} className="ui button">Delete Employee</button>
                </div>
            </div>
        );
    }

}

export default ButtonComponent;