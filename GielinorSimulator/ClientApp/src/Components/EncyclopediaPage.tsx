import React, { Component, Fragment } from 'react';
import { EntityType, Entity } from '../Model/Entity';
import Infobox from './Infobox';

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
        const response = await fetch('API/Kingdom/Misthalin');
        const data = await response.json();
        if (data as Entity) {
            this.setState({ expanded: true, entity: this.standardize(data) as Entity });
        }
        else {
            this.setState({ expanded: true, name: JSON.stringify(this.standardize(data)) });
        }
    }

    standardize(data: any): any {
        let newData: any = {};
        Object.keys(data).forEach(k => {
            const newKey = k[0].toUpperCase() + k.substr(1,k.length - 1);
            newData[newKey] = data[k];
        });
        return newData;
    }
}

export default EncyclopediaPage;