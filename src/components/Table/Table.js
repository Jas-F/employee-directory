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
        this.state = {
            // use empty array
            employees: [],
        };
    }


    // git 25users with the nationality of us using get method

    componentDidMount() {

        axios.get("https://randomuser.me/api/?results=25")
            .then(res => {
                const employees = res.data.results;
                // set new state to value of employee with the loaded api
                this.setState({ employees: employees })
                console.log(this.state);
            })

    }

    render() {
        // get search input from props
        const searchTerm = this.props.searchInput
        // filter table bases off search term
        let dataToDisplay = this.state.employees.slice()
        // with copy of state create conditional if there is a search term 
        // json the data in order to search for characters that match the search input
        // create if statement to sort data
        if (searchTerm) {
            dataToDisplay = dataToDisplay.filter(item => {
                const jsonString = JSON.stringify(item)
                return (
                    jsonString.includes(searchTerm)
                )
            })
        }
        // grab data from state
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    {/* create onclick for header
                    Store the name as a var / state 
                     */}
                    <tr>
                        {/* create on click on name
                        when clicked perform a sort function */}
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through employee array */}
                    {
                        // add data to display to filter data comming in
                        dataToDisplay.map(item => {
                            return (
                                <tr>
                                    {/* use dot notation to render image use img tag to display img */}
                                    <td><img src={item.picture.thumbnail} ></img></td>
                                    <td>{item.name.first} {item.name.last}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.dob.date}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

        )
    }
}


export default MyTable;