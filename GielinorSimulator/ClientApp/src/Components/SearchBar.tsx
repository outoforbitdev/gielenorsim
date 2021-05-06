import React, { Component } from 'react';
import { Entity } from '../Model/Entity';

interface SearchBarProps {
    updateSearch(searchTerm: string): void
}

interface SearchBarState {
    currentSearch: string,
}

export class SearchBar extends Component<SearchBarProps, SearchBarState> {

    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            currentSearch: "",
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Type to search..."
                    onChange={this.__updateSearchTerm.bind(this)}
                    onKeyUp={this.__executeSearchFromEnter.bind(this)}
                />
                <input type="button" value="Go" onClick={this.__executeSearch.bind(this)} />
            </div>
        );
    }

    private __updateSearchTerm(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ currentSearch: event.target.value });
    }

    private __executeSearch() {
        this.props.updateSearch(this.state.currentSearch);
    }

    private __executeSearchFromEnter(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.keyCode === 13) {
            this.__executeSearch.bind(this)();
        }
    }
}

export default SearchBar;