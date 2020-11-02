import React from 'react';

const ShowEmployee = (props) => {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>EmpId</th>
                            <th>First name</th>
                            <th>last Name</th>
                            <th>Department Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            (props.showEmployees.map(emp => {
                                return (
                                    <tr key={emp.id}>
                                        <td>{ emp.id }</td>
                                        <td>{ emp.firstName }</td>
                                        <td>{ emp.lastName }</td>
                                        <td>{ emp.deptName}</td>
                                    </tr>
                                );
                            }))
                        }
                    </tbody>
                </table>
            </div>
        );
}

export default ShowEmployee;