import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import Result from '../Model/Result';

interface SearchBarProps {
    updateSearch(searchTerm: string): void
}

interface SearchBarState {
    currentSearch?: string,
}

type Option = {
    label: string,
    value: string,
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
                <AsyncSelect
                    loadOptions={this.__loadOptions.bind(this)}
                    onChange={this.__handleInput.bind(this)}
                    cacheOptions
                />
            </div>
        );
    }

    private async __loadOptions(inputValue: string, callback: any) {
        const currentValueList = [{ value: inputValue, label: inputValue }]
        if (inputValue.length === 0) {
            return [];
        }
        else if (inputValue.length < 3) {
            return currentValueList;
        } else {
            return currentValueList.concat(await this.__getSuggestions.bind(this)(inputValue));
        }
    }

    private async __getSuggestions(inputValue: string) {
        const results = (await (await fetch("API/Encyclopedia/Search/" + inputValue)).json()) as Result<Option[]>;
        return (results?.Success && results.Value) ? results.Value : [];
    }

    private __handleInput(newValue: Option | null) {
        this.setState({ currentSearch: newValue?.value });
    }

    private __executeSearch() {
        if (this.state.currentSearch) {
            this.props.updateSearch(this.state.currentSearch);
        }
    }

    private __executeSearchFromEnter(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.keyCode === 13) {
            this.__executeSearch.bind(this)();
        }
    }
}

export default SearchBar;