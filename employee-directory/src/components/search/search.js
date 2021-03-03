/* Import react */
import React from "react";
/* Import css to style components */
import "./search.css"
// import bootstrap from react
import {Form} from "react";

// add search form function
function Search() {
    return (
<Form.Group>
    <Form.Control size="sm" type="text" placeholder="search" />
</Form.Group>
    )
}

export default Search;