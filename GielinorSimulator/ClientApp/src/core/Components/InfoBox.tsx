import React, { Component } from 'react';
import { InfoBoxSection } from './InfoBoxSection';
import '../Styles/InfoBox.css';
import * as lib from '../Library';
import { v4 as uuidv4 } from 'uuid';

export interface IInfoBoxLine {
    label: string;
    value: any;
}

interface IInfoBoxSection {
    header: string;
    lines: IInfoBoxLine[];
}

interface IInfoBoxProps {
    title: string;
    imageUrl?: string;
    sections: IInfoBoxSection[];
    editMode: boolean;
}

interface IInfoBoxState extends IInfoBoxProps {
    uniqueKey: string;
}

export class InfoBox extends Component<IInfoBoxProps, IInfoBoxState> {
    constructor(props: IInfoBoxProps) {
        super(props);

        this.state = {
            title: this.props.title,
            imageUrl: this.props.imageUrl,
            sections: this.props.sections,
            editMode: this.props.editMode,
            uniqueKey: "OODCoreComponentsInfoBoxSection" + uuidv4(),
        };
    }

    render() {
        const mobileClass = lib.IsMobile() ? "": " desktop";
        return (
            <table className={"OODCoreComponentsInfoBox" + mobileClass}>
                <thead><tr>
                    <th className="OODCoreComponentsInfoBox title"
                        colSpan={2}>
                        {this.state.title}
                    </th></tr></thead>
                <tbody>
                    {
                        this.state.sections.map((section, i) =>
                            <InfoBoxSection header={section.header}
                                lines={section.lines}
                                editMode={this.state.editMode}
                                key={this.state.uniqueKey + i} />
                        )
                    }
                </tbody>
            </table>
        );
    }
}