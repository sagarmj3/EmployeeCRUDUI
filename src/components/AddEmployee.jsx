import React from 'react';

class AddEmpolyee extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            fields: {}
        }
        
        this.handleChange = (e, name) => {
            let fields = this.state.fields;
            fields[name] = e.target.value;
            this.setState({fields});
        }

        this.handleAddSubmit = (e, fields) => {
            e.preventDefault();
            console.log(fields);
            this.props.propAddEmployee(fields);
        }

    }


    render(){

        return (
            <div className="ui form">
                <h1 className="ui header">Add Employee</h1>
                <form onSubmit={(e) => {this.handleAddSubmit(e, this.state.fields)}}>
                    <div>
                        <label>First Name</label>
                        <input onChange={(e) => this.handleChange(e, 'firstName')} type="text" placeholder="Enter first name" />
                    </div><br/>
                    <div>
                        <label>Last Name</label>
                        <input onChange={(e) => this.handleChange(e, 'lastName')} type="text" placeholder="Enter last name"/>
                    </div><br/>
                    <div>
                        <label>Department Name</label>
                        <input onChange={(e) => this.handleChange(e, 'deptName')} type="text" placeholder="Enter dept name"/>
                    </div><br/>
                    <button className="ui submit button">Add Employee</button>
                </form>
            </div>
        )

    }

}

export default AddEmpolyee;