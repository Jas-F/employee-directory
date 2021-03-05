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
class MyTable extends React.Component() {
    // set new sate empty array names user
    state = {
        user: []
    }

    // constructor(props) {
    //     // identify props are the parent
    //     super(props);
    //     // set state as a new object items as an array
    //     this.state = {
    //         items: [],
    //         // noting that the array has not been loaded with data
    //         isLoaded: false,
    //     }

    // }

    // fetching api and setting a new state
    // git 25users with the nationality of us
    componentDidMount() {

        // fetch('https://randomuser.me/api/?results=25?nat=us')
        //     // convert the results to json
        //     .then(res => res.json())
        //     // set new state with updated items object with api data
        //     // set is loaded to true indicating that the api has loaded properly
        //     .then(json => {
        //     this.setState({
        //         isLoaded: true,
        //         items: json,
        //     })
        //         console.log(items)
        //     });
        // get data from api url
        // const url = "https://randomuser.me/api/?results=25?nat=us";
        // get data from url
        axios.get("https://randomuser.me/api/?results=25?nat=us")
        .then(res =>{
            const user = res.data;
            console.log(user);
        })
  



    }
 
//     render() {
//         // grab data from state
//         const {isLoaded, items } = this.state;

//     return (
//         <Table striped bordered hover variant="dark">
//             <thead>
//                 <tr>
//                     <th>Image</th>
//                     <th>Name</th>
//                     <th>Phone</th>
//                     <th>Email</th>
//                     <th>DOB</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
// {/*                     
//                     {items.map(items => (
//                         <td>image placeholder</td>
//                         <td>(item.name</td>
//                         <td>name placeholder</td>
//                         <td>phone placeholder</td>
//                         <td>email placeholder</td>
//                         <td>DOB placeholder</td>
//                     ))} */}
                    
                   
//                 </tr>
//             </tbody>
//         </Table>

//     )
// }}
}

export default MyTable;