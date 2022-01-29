import React, { Component, Fragment } from 'react';
import { InfoBoxLine } from './InfoBoxLine';
import { IInfoBoxLine } from './InfoBox';
import { v4 as uuidv4 } from 'uuid';
import '../Styles/InfoBox.css';
import { IComponentProps } from '../Components';

interface IInfoBoxSectionProps extends IComponentProps {
    header: string;
    editMode: boolean;
}

export function InfoBoxSection(props: IInfoBoxSectionProps) {
    return (
        <Fragment>
            <tr>
                <th className="OODCoreComponentsInfoBox header"
                    colSpan={2}>
                    {props.header}
                </th>
            </tr>{
                props.children
            }
        </Fragment>
    );
}