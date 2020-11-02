import React from 'react';
import AddEmpolyee from './AddEmployee';
import GetEmployee from './GetEmployee';
import UpdateEmployee from './UpdateEmployee';
import DeleteEmployee from './DeleteEmployee';

const ViewComponent = (props) => {
    
        const {propAddEmployee, propGetEmployee, propUpdateEmployee, propDeleteEmployee,
                showPage, showEmployees} = props;

        const handleShowComponent = (showPage) => {
            switch(showPage){
                case 'add' :
                    return  <AddEmpolyee 
                                propAddEmployee={(fields) => {propAddEmployee(fields)}}
                                showPage={showPage}
                            />
                case 'get' :
                    return  <GetEmployee
                                propGetEmployee={() => propGetEmployee()}
                                showEmployees={showEmployees}
                            />
                case 'update' :
                    return  <UpdateEmployee
                                propUpdateEmployee={(fields) => {propUpdateEmployee(fields)}}
                                showPage={showPage}
                            />
                case 'delete' :
                    return  <DeleteEmployee
                                propDeleteEmployee={(id) => {propDeleteEmployee(id)}}
                            />
                default :
                    return  <AddEmpolyee 
                                propAddEmployee={(fields) => {propAddEmployee(fields)}}
                            />
            }
        }

        return (
            <div>
                {handleShowComponent(showPage)}      
            </div>
        );
}

export default ViewComponent;