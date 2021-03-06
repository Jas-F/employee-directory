/* Import react */
import React from "react";
/* Import css to style components */
import "./search.css"
// import bootstrap from react
// change rect bootstrap documentation 
import Form from "react-bootstrap/Form";

// add search form function
// let search receive 
function Search(props) {
    return (
<Form.Group>
    {/* create on change function that takes search input and sets it to the new state of search input */}
    <Form.Control size="sm" type="text" placeholder="search" onChange={ (e)=> {
        const val = e.target.value
        props.setSearchInput(val)
    }}/>s
</Form.Group>
    )
}

export default Search;