import React, { Component, Fragment } from 'react';
import { InfoBoxLine } from './InfoBoxLine';
import { IInfoBoxLine } from './InfoBox';
import { v4 as uuidv4 } from 'uuid';
import '../Styles/InfoBox.css';

interface IInfoBoxSectionProps {
    header: string;
    lines: IInfoBoxLine[];
    editMode: boolean;
}

interface IInfoBoxSectionState extends IInfoBoxSectionProps {
    uniqueKey: string;
}

export class InfoBoxSection extends Component<IInfoBoxSectionProps, IInfoBoxSectionState> {
    constructor(props: IInfoBoxSectionProps) {
        super(props);

        this.state = {
            header: this.props.header,
            lines: this.props.lines,
            editMode: this.props.editMode,
            uniqueKey: "OODCoreComponentsInfoBoxSection" + uuidv4(),
        };
    }

    render() {
        return (
            <Fragment>
                <tr>
                    <th className="OODCoreComponentsInfoBox header"
                        colSpan={2}>
                        {this.state.header}
                    </th>
                </tr>   
                <Fragment>{
                    this.state.lines.map((line, i) =>
                        <InfoBoxLine label={line.label}
                            value={line.value}
                            editMode={this.state.editMode}
                            even={i % 2 === 0}
                            key={this.state.uniqueKey + i.toString()} />
                    )}
                </Fragment>
            </Fragment>
        );
    }
}