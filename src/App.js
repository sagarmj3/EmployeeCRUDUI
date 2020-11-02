import './style.css';
import React from 'react';
import ButtonComponet from './components/ButtonComponet';
import ViewComponent from './components/ViewComponent';
import Service from './Service';

 class App extends React.Component{

    constructor(){
        super();

        this.state = {
            showPage: '',
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
                            propAddEmployee={(e) => {this.handleAddEmployee(e)}}
                            showPage={this.state.showPage}
                            propGetEmployee={() => {this.handleGetEmployee()}}
                            showEmployees={this.state.showEmployees}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;