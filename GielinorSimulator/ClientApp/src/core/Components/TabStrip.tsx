import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TabStripProps {
    tabs: string[];
    onTabSelect: (tab: string) => void;
    className?: string;
}

interface TabStripState extends TabStripProps {
    uniqueKey: string;
}

export class TabStrip extends Component<TabStripProps, TabStripState> {
    constructor(props: TabStripProps) {
        super(props);

        this.state = {
            tabs: this.props.tabs,
            onTabSelect: this.props.onTabSelect,
            className: this.props.className ?? "",
            uniqueKey: uuidv4(),
        };
    }

    render() {
        return (
            <table className={this.state.className}>
                <tbody><tr>{
                    this.state.tabs.map(
                        (value) =>
                            <td
                                key={this.state.uniqueKey + value}
                                onClick={() => this.__onTabSelect(value)}>{value}
                            </td>)
                }
                </tr></tbody>
            </table>
        );
    }

    __onTabSelect(tabName: string) {
        console.log(tabName);
    }
}