import React from 'react';

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { term: 'direwolf20' };
    }

    render() {
        return <div className="search-bar">
            <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
        </div>
    }

    onInputChange(term) {
        this.setState({
            term
        });

        this.props.onSearchTermChange(term);
    }
}