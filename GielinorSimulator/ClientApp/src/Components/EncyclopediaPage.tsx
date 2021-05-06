import React, { Component, Fragment } from 'react';
import { EntityType, Entity } from '../Model/Entity';
import Infobox from './Infobox';
import ArticleContent from './ArticleContent';
import { IContent } from './Interfaces';
import { Kingdom } from '../Model/Kingdom';
import * as Functions from '../Model/Functions';

import '../Styles/EncyclopediaPage.css'

interface EncyclopediaPageProps {
    entityType: EntityType;
    name: string;
    expanded: boolean;
}

interface EncyclopediaPageState {
    entityType: EntityType;
    name: string;
    expanded: boolean;
    entity?: Entity;
    description?: string;
}

export class EncyclopediaPage extends Component<EncyclopediaPageProps, EncyclopediaPageState> {

    constructor(props: EncyclopediaPageProps) {
        super(props);
        this.state = {
            entityType: props.entityType,
            name: props.name,
            expanded: props.expanded ? props.expanded : false,
        }
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
            let description: IContent = {
                summary: { value: "summary" },
                sections: [
                    {
                        title: { value: "section 1 title" },
                        summary: { value: "section 1 summary" },
                    },
                    {
                        title: { value: "section 2 title" },
                        summary: { value: "section 2 summary" },
                        subsections: [{
                            title: { value: "section 2.1 title" },
                            summary: { value: "section 2.1 summary" },
                        }]
                    }
                ],
            };

            return (
                <div>
                    <h1>{this.state.entity?.Name}</h1>
                    <Infobox entity={this.state.entity} />
                    <ArticleContent content={JSON.stringify(description)} editable={true} />
                </div>
            );
        }
    }

    async populateEntity(): Promise<void> {
        const response = await (await fetch('API/Kingdom/Misthalin')).json();
        console.log(await response);
        const data = new Kingdom(Functions.standardize(response));
        if (data as Entity) {
            this.setState({ expanded: true, entity: data as Entity });
        }
        else {
            this.setState({ expanded: true, name: JSON.stringify(Functions.standardize(response)) });
        }
    }
}

export default EncyclopediaPage;