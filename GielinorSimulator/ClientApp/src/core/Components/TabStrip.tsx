import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../Styles/TabStrip.css';

interface TabStripProps {
    tabNames: Set<string>;
    onTabSelect: (tab: string) => void;
    className?: string;
}

interface TabStripState extends TabStripProps {
    uniqueKey: string;
    selected: string;
    tabs: Map<string, HTMLTableCellElement|null>;
}

export class TabStrip extends Component<TabStripProps, TabStripState> {
    constructor(props: TabStripProps) {
        super(props);

        this.state = {
            tabNames: this.props.tabNames,
            onTabSelect: this.props.onTabSelect,
            className: this.props.className ?? "",
            uniqueKey: uuidv4(),
            selected: this.props.tabNames.values().next().value,
            tabs: new Map(),
        };
    }

    render() {
        return (
            <table
                className={this.state.className + " OODCoreComponentsTabStrip"}>
                <tbody><tr>{
                    [...this.state.tabNames].map(
                        (value, i) =>
                            <td className={i === 0 ? "OODCoreComponentsTabStrip selected": "OODCoreComponentsTabStrip"}
                                key={this.__getTabId(value)}
                                ref={input => this.state.tabs.set(value, input)}
                                onClick={(event) => this.__onTabSelect.bind(this)(value, event)}>{value}
                            </td>)
                }
                    <td className={"OODCoreComponentsTabStrip spacer"} />
                </tr></tbody>
            </table>
        );
    }

    __onTabSelect(tabName: string, event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) {
        if (this.state.selected === tabName) {
            return;
        }
        this.state.tabs.get(this.state.selected)?.classList.remove("selected");
        event.currentTarget.classList.add("selected");
        
        this.setState({ selected: tabName });
        this.state.onTabSelect(tabName);
    }

    __getTabId(tabName: string) {
        return this.state.className + tabName;
    }
}