/* Import react */
import React from "react";

// import axios
import axios from 'axios';
/* Import css to style components */
import "./table.css";

// import bootstrap
import Table from "react-bootstrap/Table";

// create table function
// change table function name to resolve name conflict

// 2. Render random user api data into table
// 2a. change component function myTable to class my table to add functionality ES6 allowing for render of table
// 2b. set original state 
// 2c. Add componentDidMount to set new state with api data
// 2d. Use render method to produce output
// 2e. Render API Data into the table using this.state
// 3 Make table sortable
// 3a. Put td name inside of a button with an onlick functino
// 3b. Create a new state for sorted field
// 3c. make the state empty so it can be set when onlick function is triggered in button
// 3d. Create if statement that will sort all names into ascending or descending order
class MyTable extends React.Component {
    // set new state to employee with  the value of an empty array
    constructor(props) {
        super(props);
        this.state =.Component {
            employee: null,
        };
    }
    

    // git 25users with the nationality of us using get method

    componentDidMount() {

        axios.get("https://randomuser.me/api/?results=25")
            .then(res => {
                const employee = res.data;
                // set new state with loaded api
                this.setState({ employee: employee })
                console.log(employee);
            })

    }

    render() {
        // grab data from state
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

{/* map through employee data and render inside each */}
                        <td>image placeholder</td>
                        <td>{this.state.results.name}</td>
                        <td>phone placeholder</td>
                        <td>email placeholder</td>
                        <td>DOB placeholder</td>



                    </tr>
                </tbody>
            </Table>

        )
    }
}


export default MyTable;