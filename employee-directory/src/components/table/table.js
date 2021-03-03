/* Import react */
import React from "react";

/* Import css to style components */
import "./table.css";

// create table function
function Table() {
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

export default Table;