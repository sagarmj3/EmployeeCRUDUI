import React from 'react';
import ShowEmployee from './ShowEmployee';

class GetEmployee extends React.Component {

    constructor(props){
        super(props);

        this.handleGetClick = () => {
            this.props.propGetEmployee();
        }
    }
    render() {

        const {showEmployees} = this.props;
        
        return (
            <div>
                <div className="ui container">
                    <h1 className="ui header">Get Employee</h1>
                    <button onClick={() => this.handleGetClick()} className="ui button">Click here</button>
                </div>

                {(showEmployees.length > 0) && <div className="ui container segment">
                        <ShowEmployee 
                            showEmployees={showEmployees}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default GetEmployee;