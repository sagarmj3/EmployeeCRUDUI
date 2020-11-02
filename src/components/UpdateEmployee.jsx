import React from 'react';
import AddEmpolyee from './AddEmployee';

const UpdateEmployee = (props) => {

        return (
            <div>
                <AddEmpolyee propUpdateEmployee={(fields) => {props.propUpdateEmployee(fields)}}/>
                
            </div>
        );
    
}

export default UpdateEmployee;