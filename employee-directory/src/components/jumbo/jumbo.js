/* Import react */
import React from "react";

/* Import css to style components */
import "./jumbo.css";

// create function to return jumbo bootstrap
function Jumbo() {
    return (
<Jumbotron fluid>
    <Container>
        <h1>Employee Directory</h1>
        <h2>Search by name to filter results</h2>
    </Container>
</Jumbotron>
    )
} 

export default Jumbo;