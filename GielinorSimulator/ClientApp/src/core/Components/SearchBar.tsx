import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../Styles/SearchBar.css';


interface ISearchBarProps {
    className?: string;
}

interface ISearchBarState extends ISearchBarProps{
    options: string[];
    uniqueKey: string;
    currentFocus: number;
}

export class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
    constructor(props: ISearchBarProps) {
        super(props);

        this.state = {
            className: this.props.className,
            options: [],
            uniqueKey: "OODCoreComponentsSearchBar" + uuidv4(),
            currentFocus: -1,
        };
    }

    render() {
        return (
            <div className={"OODCoreComponentsSearchBar autocomplete " + this.state.className}>
                <input type="text"
                    onFocus={this.__onFocus.bind(this)}
                    onBlur={this.__onBlur.bind(this)}
                    onKeyDown={this.__onKeyDown.bind(this)}
                    className={"OODCoreComponentsSearchBar"} />
                <div className={"OODCoreComponentsSearchBar autocomplete-items"}>
                    {
                        this.state.options.map((option, i) => {
                            let className = "OODCoreComponentsSearchBar";
                            if (i === this.state.currentFocus) {
                                className = className + " autocomplete-active";
                            }
                            return (
                                <div
                                    className={className}>
                                    {option}
                                    <input type="hidden" />
                                </div>);
                        })
                    }
                </div>
            </div>
        );
    }

    private __onFocus() {
        this.setState({
            options: ["one", "two", "three", "four", "five"],
        });
    }

    private __onBlur() {
        this.setState({
            options: [],
            currentFocus: -1,
        });
    }

    private __onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        let currentFocus = this.state.currentFocus;
        if (event.keyCode === 40) {
            currentFocus++;
            if (currentFocus >= this.state.options.length) {
                currentFocus = -1;
            }
        }
        else if (event.keyCode === 38) {
            currentFocus--;
            if (currentFocus < -1) {
                currentFocus = this.state.options.length - 1;
            }
        }
        else if (event.keyCode === 27) {
            event.currentTarget.blur();
        }

        this.setState({
            currentFocus: currentFocus,
        });
    }
}