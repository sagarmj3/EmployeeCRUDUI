import React from 'react';
import AddEmpolyee from './AddEmployee';
import GetEmployee from './GetEmployee';
import UpdateEmployee from './UpdateEmployee';
import DeleteEmployee from './DeleteEmployee';

class ViewComponent extends React.Component{

    constructor(props){
        super(props);
        
    }
    render() {
        
        const {propAddEmployee, propGetEmployee, showPage, showEmployees} = this.props;
        this.showComponent = (showPage) => {
            switch(showPage){
                case 'add' :
                    return  <AddEmpolyee 
                                propAddEmployee={(fields) => {propAddEmployee(fields)}}
                            />
                case 'get' :
                    return  <GetEmployee
                                propGetEmployee={() => propGetEmployee()}
                                showEmployees={showEmployees}
                            />
                case 'update' :
                    return  <UpdateEmployee
                            />
                case 'delete' :
                    return  <DeleteEmployee
                            />
                default :
                    return  <AddEmpolyee 
                                propAddEmployee={(fields) => {propAddEmployee(fields)}}
                            />
            }
        }
        return (
            <div>
                {this.showComponent(showPage)}      
            </div>
        );
    }
}

export default ViewComponent;