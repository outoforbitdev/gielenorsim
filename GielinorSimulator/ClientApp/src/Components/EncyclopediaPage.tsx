import React, { Component } from 'react';
import { Entity } from '../Model/Entity';
import Infobox from './Infobox';
import ArticleContent from './ArticleContent';
import { IContent } from './Interfaces';

interface EncyclopediaPageProps {
    entity: Entity;
    expanded: boolean;
}

interface EncyclopediaPageState {
    expanded: boolean;
    entity: Entity;
    description?: string;
}

export class EncyclopediaPage extends Component<EncyclopediaPageProps, EncyclopediaPageState> {

    constructor(props: EncyclopediaPageProps) {
        super(props);
        this.state = {
            entity: props.entity,
            expanded: props.expanded ? props.expanded : false,
        }
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
                    <h1>{this.state.entity.Name}</h1>
                    <Infobox entity={this.state.entity} />
                    <ArticleContent content={JSON.stringify(description)} editable={true} />
                </div>
            );
        }
    }
}

export default EncyclopediaPage;