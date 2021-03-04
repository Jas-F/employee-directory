/* Import react */
import React from "react";
/* Import css to style components */
import "./search.css"
// import bootstrap from react
// change rect bootstrap documentation 
import Form from "react-bootstrap/Form";

// add search form function

function Search() {
    return (
<Form.Group>
    <Form.Control size="sm" type="text" placeholder="search" />
</Form.Group>
    )
}

export default Search;