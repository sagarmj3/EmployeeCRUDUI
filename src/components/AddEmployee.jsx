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
            this.props.propAddEmployee(fields);
        }

        this.handleUpdateSubmit = (e, fields) => {
            e.preventDefault();
            this.props.propUpdateEmployee(fields);
        }
    }


    render(){

        const {showPage} = this.props;

        return (
            <div className="ui form">
                {
                    showPage === 'add' ? <h1 className="ui header">Add Employee</h1> : 
                        <h1 className="ui header">Update Employee</h1>
                }
                <form>
                    <div>
                        { 
                        showPage === 'add' ? '' :
                            (<div className="ui field">
                                <label>Employee Id</label>
                                <input onChange={(e) => this.handleChange(e, 'empId')} type="text" placeholder="Enter first name" />
                            </div>) 
                        }<div></div>
                    </div>
                    <div className="ui field">
                        <label>First Name</label>
                        <input onChange={(e) => this.handleChange(e, 'firstName')} type="text" placeholder="Enter first name" />
                    </div>
                    <div className="ui field">
                        <label>Last Name</label>
                        <input onChange={(e) => this.handleChange(e, 'lastName')} type="text" placeholder="Enter last name"/>
                    </div>
                    <div className="ui field">
                        <label>Department Name</label>
                        <input onChange={(e) => this.handleChange(e, 'deptName')} type="text" placeholder="Enter dept name"/>
                    </div>
                    {
                        showPage === 'add' 
                            ? 
                            <button 
                                onClick={(e) => {this.handleAddSubmit(e, this.state.fields)}} 
                                    className="ui submit button">Add Employee</button>
                            :
                            <button 
                                onClick={(e) => {this.handleUpdateSubmit(e, this.state.fields)}}
                                    className="ui submit button">Update Employee</button>
                    }
                </form>
            </div>
        )

    }

}

export default AddEmpolyee;