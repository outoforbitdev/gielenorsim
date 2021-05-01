import React, { Component, Fragment } from 'react';
import { EntityType, Entity } from '../Model/Entity';
import Infobox from './Infobox';
import { Kingdom } from '../Model/Kingdom';
import * as Functions from '../Model/Functions';

import '../Styles/EncyclopediaPage.css'

interface EncyclopediaPageProps {
    entityType: EntityType;
    name: string;
    expanded: boolean;
    entity: Entity;
    description: string;
}

export class EncyclopediaPage extends Component {
    state: EncyclopediaPageProps;

    constructor(props: EncyclopediaPageProps) {
        super(props);
        this.state = props;
    }

    componentDidMount() {
        this.populateEntity();
    }

    render() {
        if (!this.state.expanded) {
            return (
                <div>
                    <Infobox />
                </div>
            );
        }
        else {
            let description = "description is here ";
            for (let i = 0; i < 10; i++) {
                description = description + description;
            }
            return (
                <div>
                    <h1>{this.state.entity.Name}</h1>
                    <Infobox entity={this.state.entity} />
                    <div>{description}</div>
                </div>
            );
        }
    }

    async populateEntity(): Promise<void> {
        const response = await (await fetch('API/Kingdom/Misthalin')).json();
        console.log(await response);
        const data = new Kingdom(Functions.standardize(response));
        //if (data as Entity) {
            this.setState({ expanded: true, entity: data as Entity });
        //}
        //else {
        //    this.setState({ expanded: true, name: JSON.stringify(this.standardize(data)) });
        //}
    }
}

export default EncyclopediaPage;