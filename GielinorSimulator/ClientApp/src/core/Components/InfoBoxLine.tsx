import React from 'react';
import { IComponentProps, TextField } from '../Components';
import '../Styles/InfoBox.css';

enum InfoBoxLineType {
    String,
}

interface IInfoBoxLineProps extends IComponentProps {
    label: string;
    value: any;
    editMode: boolean;
    lineType?: InfoBoxLineType;
    even: boolean;
}

export function InfoBoxLine(props: IInfoBoxLineProps) {
    let inputField;
    switch (props.lineType) {
        case InfoBoxLineType.String:
        default:
            <TextField
                defaultValue={props.value}
            />
    }

    return (
        <tr className={"OODCoreComponentsInfoBox" + props.even ? "even": "odd"}>
            <td className="OODCoreComponentsInfoBox label">{props.label}</td>
            <td className="OODCoreComponentsInfoBox value">
                {
                    props.editMode ?
                        inputField :
                        props.value
                }
                </td>
        </tr>
    );
}