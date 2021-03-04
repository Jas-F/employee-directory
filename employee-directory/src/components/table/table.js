/* Import react */
import React from "react";

/* Import css to style components */
import "./table.css";

// import bootrapp
import Table from "react-bootstrap/Table"

// create table function
// change table function name to resolve name conflict
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