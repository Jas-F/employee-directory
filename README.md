# Employee Directory
 Create a employee directory with React. Break up your application's UI into components, manage component state, and respond to user events.
<br>
===========
![Image](employee.gif)

<br>

## Break UI into components

```
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
```
<br>

## Manage State

```
axios.get("https://randomuser.me/api/?results=25")
            .then(res => {
                const employees = res.data.results;
                // set new state to value of employee with the loaded api
                this.setState({ employees: employees })
                console.log(this.state);
            })
```
<br>

## Respond to User Events

```
<Form.Control size="sm" type="text" placeholder="search" onChange={ (e)=> {
        const val = e.target.value
        props.setSearchInput(val)
    }}/>
```

<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)

## Deployed Link

* [See Live Site](https://jas-f.github.io/employee-directory/)

## License

This project is licensed under the MIT License 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Prerequisites

Git hub,
Git lab,
Git bash,
Visual studio,
Google chrome,
Bootstrap,
JavaScript,
JQuery

## Authors

**Jasmine Franklin C: 301-332-2313 E: jasminer.franklin@gmail** 

- [Link to Portfolio Site](https://jas-f.github.io/portfolio-3.0/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/in/jasmine-franklin-8b08ba121)

<p>&copy; UC Berkeley Extension Bootcamp.</p>