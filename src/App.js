import './style.css';
import React from 'react';
import ButtonComponet from './components/ButtonComponet';
import ViewComponent from './components/ViewComponent';
import Service from './Service';

 class App extends React.Component{

    constructor(){
        super();

        this.state = {
            showPage: 'add',
            showEmployees: {}
        }
        

        this.handleAddEmployee = async (fields) => {
            let firstName = fields.firstName;
            let lastName = fields.lastName;
            let deptName = fields.deptName;

            let response = await Service.post('/addEmployeeDetails', {
                firstName, lastName, deptName
            });
            if(response){
                alert("Data added successfully");
            }
        }

        this.handleGetEmployee = async () => {

           let response = await Service.get('/getEmployeeDetails')
           if(response){
                this.setState({showEmployees: response.data});               
           }
        }

        this.handleUpdateEmployee = async (fields) => {
            console.log(fields);
            let id = fields.empId;
            let firstName = fields.firstName;
            let lastName = fields.lastName;
            let deptName = fields.deptName;

            let response = await Service.put('/updateEmployeeDetails/id/' + id, {
                firstName, lastName, deptName
            });

            if(response){
                alert("Data updated successfully");
            }

        }
        
        this.handleDeleteEmployee = async (id) => {
            let response = await Service.delete('deleteEmployeeDetails/id/' + id);
            if(response){
                alert("Deleted successfully");
            }
        }

        this.handleButtonClick = (e) => {
            this.setState({showPage: e});
        }
    }

    render(){

        return (
            <div>
                <div className="ui container style-container">
                    <ButtonComponet
                        handleButtonClick={(e) => {this.handleButtonClick(e)}}    
                    />
                </div>
                <div className="ui container style-container" >
                    <div className="ui segment">
                        <ViewComponent 
                            showPage={this.state.showPage}
                            propAddEmployee={(e) => {this.handleAddEmployee(e)}}
                            propGetEmployee={() => {this.handleGetEmployee()}}
                            propUpdateEmployee={(e) => {this.handleUpdateEmployee(e)}}
                            propDeleteEmployee={(e) => {this.handleDeleteEmployee(e)}}
                            showEmployees={this.state.showEmployees}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;