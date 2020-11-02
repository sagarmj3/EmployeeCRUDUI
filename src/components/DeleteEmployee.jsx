import React from 'react';

class DeleteEmployee extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: '' 
        }

        this.handleChange = (e) => {
            this.setState({id: e.target.value});
        }

        this.handleDeleteSubmit = (e, id) => {
            e.preventDefault();

            this.props.propDeleteEmployee(id);
        }
    }

    render() {

        return (
            <div className="ui form">
                <form>
                    <div className="ui field">
                        <label>Enter employee id</label>
                        <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Enter employee id" />
                    </div>
                    <button onClick={(e) => {this.handleDeleteSubmit(e, this.state.id)}} className="ui submit button">Delete Employee</button>
                </form>
            </div>
        );
    }
}

export default DeleteEmployee;