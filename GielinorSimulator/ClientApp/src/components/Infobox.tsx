import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { Entity } from '../Model/Entity';
import { Kingdom } from '../Model/Kingdom';
import { Date } from '../Model/Date';

import '../Styles/Infobox.css'

export class Infobox extends Component {
    entity: Entity;
    editable: boolean;

    constructor(props: any) {
        super(props);
        this.entity = props.entity;
        this.editable = props.editable;
    }

    render() {
        if (this.entity as Kingdom) {
            return this.kingdomTable(this.entity as Kingdom, this.editable);
        }
        else {
            return (
                <table>
                    <tr><th colSpan={2}>{this.entity?.Name}</th></tr>
                    <tr><td colSpan={2}>Heading</td></tr>
                    <tr><td>Field 1</td><td>Info</td></tr>
                </table>
            );
        }
    }

    kingdomTable(kingdom: Kingdom, editable: boolean) {
        return (
            <table>
                <InfoboxTitle title={kingdom.Name} />
                {undefined ?
                    <InfoboxHeader header="PoliticalInformation">
                        <InfoboxField label="Government Type" value={kingdom.Government} editable={editable} />
                        <InfoboxField label="Monarch" value={kingdom.Monarch} editable={editable} />
                        <InfoboxField label="Usurper" value={kingdom.Usurper} editable={editable} />
                        <InfoboxField label="Council" value={kingdom.Council} editable={editable} />
                    </InfoboxHeader>
                    : null
                }
                { kingdom.Capital || kingdom.Demonym || kingdom.Religion ?
                    <InfoboxHeader header="Societal Information">
                        <InfoboxField label="Capital" value={kingdom.Capital} editable={editable} />
                        <InfoboxField label="Demonym" value={kingdom.Demonym} editable={editable} />
                        <InfoboxField label="State Religious Body" value={kingdom.Religion} editable={editable} />
                    </InfoboxHeader>
                    : null
                }
                { kingdom.Established ?
                    <InfoboxHeader header="Historical Information">
                        <InfoboxField label="Date Established" value={kingdom.Established.DateString()} editable={editable} />
                        <InfoboxField label="Date Fragmented" value={kingdom.Fragmented} editable={editable} />
                        <InfoboxField label="Date Reorganized" value={kingdom.Reorganized} editable={editable} />
                        <InfoboxField label="Date Dissolved" value={kingdom.Dissolved} editable={editable} />
                        <InfoboxField label="Date Restored" value={kingdom.Restored} editable={editable} />
                    </InfoboxHeader>
                    : null
                }
            </table>
        );
    }
}

class InfoboxTitle extends Component {
    title: string;
    constructor(props: { title: string }) {
        super(props)
        this.title = props.title;
    }

    render() {
        return (
            <tr><th colSpan={2}>{this.title}</th></tr>
        );
    }
}

class InfoboxHeader extends Component {
    header: string;
    constructor(props: { header: string }) {
        super(props)
        this.header = props.header;
    }

    render() {
        if (this.props.children) {
            return (
                <Fragment>
                    <tr><th colSpan={2}>{this.header}</th></tr>
                    {this.props.children}
                </Fragment>
            );
        }
        else {
            return null;
        }
    }
}

interface InfoboxFieldProps {
    label: string,
    value: string,
    editable: boolean,
}

class InfoboxField extends Component {
    constructor(props: InfoboxFieldProps) {
        super(props);
        this.state = { label: props.label, value: props.value, editable: props.editable };
    }

    render() {
        if (this.state.value) {
            return (
                <tr><td>{this.state.label}</td><td>{this.state.editable ? <input type="text" value={this.state.value} /> : this.state.value}</td></tr>
            );
        }
        else {
            return null;
        }
    }
}

export default Infobox;