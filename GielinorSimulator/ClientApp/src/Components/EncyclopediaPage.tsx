import React, { Component } from 'react';
import { Entity, EntityType } from '../Model/Entity';
import Infobox from './Infobox';
import ArticleContent from './ArticleContent';
import { IContent } from './Interfaces';
import { Being } from '../Model/Being';
import Kingdom from '../Model/Kingdom';
import { get } from './Core';

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

    private async __getDescription() {
        const url = "API/Encyclopedia/Description/" + EntityType[this.__getEntityType()] + "/" + this.state.entity.Name;
        const data = await get<IContent>(url);
        return data.Success ? data.Value : undefined;
    }

    private __getEntityType() {
        if (this.state.entity as Kingdom) {
            return EntityType.Kingdom;
        } else if (this.state.entity as Being) {
            return EntityType.Being;
        } else {
            return EntityType.Kingdom;
        }
    }
}

export default EncyclopediaPage;