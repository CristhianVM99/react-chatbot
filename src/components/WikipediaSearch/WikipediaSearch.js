import React, { Component } from 'react';
import axios from 'axios';

class WikipediaSearch extends Component {
 
    constructor(props) {
        super(props);
        const { steps } = this.props;
        const { searchWiki } = steps;
        this.state = {
            searchWiki,
            searchText: "",
            description: "Lorem Ipsum"
        }
    }

    async componentDidMount() {

        let text = this.state.searchWiki.value

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({
            searchText: text,
            description: '...'
        })
    }

    render() {
        return (
            <div>
                <p>Resultados para <strong>{this.state.searchWiki.value}</strong>: </p>
                {/* <p>{this.state.description}</p> */}
                <a href={"https://es.wikipedia.org/wiki/" + this.state.searchText} target="_blank">{"https://es.wikipedia.org/wiki/" + this.state.searchText}</a>
            </div>
        )
    }

    

}
export default WikipediaSearch;