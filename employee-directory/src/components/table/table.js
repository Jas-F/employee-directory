/* Import react */
import React from "react";

/* Import css to style components */
import "./table.css";

// import bootstrap
import Table from "react-bootstrap/Table"

// create table function
// change table function name to resolve name conflict

// 2. Manage components state 
// 2a. change component function myTable to class my table to add functionality allowing for render of table
// 2b. Add constructor to assign object to this.state/assign initial state as an empty string before API is loaded
// 2c. Add componentDidMount to to create api call fetch random user API and declare new state
// 2d. Use render method to produce output
// 2e. Add map to loop through items and output items data
// 3 Make table sortable
// 3a. Put td name inside of a button with an onlick functino
// 3b. Create a new state for sorted field
// 3c. make the state empty so it can be set when onlick function is triggered in button
// 3d. Create if statement that will sort all names into ascending or descending order
function MyTable() {
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
                    {/* add props since we know that we are going to be passing info through props */}
                    <td>image placeholder</td>
                    <td>name placeholder</td>
                    <td>phone placeholder</td>
                    <td>email placeholder</td>
                    <td>DOB placeholder</td>
                </tr>
            </tbody>
        </Table>

    )
}

export default MyTable;