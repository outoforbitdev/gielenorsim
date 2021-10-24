import React, { Component } from 'react';
import {Input} from './Input';
import '../Styles/InfoBox.css';

enum InfoBoxLineType {
    String,
}

interface IInfoBoxLineProps {
    label: string;
    value: any;
    editMode: boolean;
    lineType?: InfoBoxLineType;
    even: boolean;
}

interface IInfoBoxLineState extends IInfoBoxLineProps {
}

export class InfoBoxLine extends Component<IInfoBoxLineProps, IInfoBoxLineState> {
    constructor(props: IInfoBoxLineProps) {
        super(props);

        this.state = {
            label: this.props.label,
            value: this.props.value,
            editMode: this.props.editMode,
            even: this.props.even,
        };
    }

    render() {
        return (
            <tr className={"OODCoreComponentsInfoBox" + this.state.even ? "even": "odd"}>
                <td className="OODCoreComponentsInfoBox label">{this.state.label}</td>
                <td className="OODCoreComponentsInfoBox value">
                    {
                        this.state.editMode ?
                            <Input value={this.state.value} onValueChange={(val) => {}} /> :
                            this.state.value
                    }
                    </td>
            </tr>
        );
    }
}