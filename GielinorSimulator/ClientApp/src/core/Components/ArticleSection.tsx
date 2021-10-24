import React, { Component, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface IArticleSection {
    header: string;
    content?: string;
    subsections?: IArticleSection[];
}

interface IArticleSectionProps {
    section: IArticleSection;
    editMode: boolean;
    onChange?: (article: IArticleSection) => void;
    prefix: string;
}

interface IArticleSectionState extends IArticleSectionProps{
    uniqueKey: string;
}

export class ArticleSection extends Component<IArticleSectionProps, IArticleSectionState> {
    constructor(props: IArticleSectionProps) {
        super(props);

        this.state = {
            section: this.props.section,
            editMode: this.props.editMode,
            onChange: this.props.onChange,
            prefix: this.props.prefix,
            uniqueKey: "OODCoreComponentsArticleSection" + uuidv4(),
        };
    }

    render() {
        return (
            <Fragment>
                <h3>{this.state.prefix + " " + this.state.section.header}</h3>
                <Fragment>
                {this.state.section.content ?
                    <p>{this.state.section.content}</p> :
                    undefined
                    }
                </Fragment>
                <Fragment>
                    {this.state.section.subsections?.length || 0 > 0 ?
                    this.state.section.subsections!.map((section,i) =>
                        <ArticleSection
                            section={section}
                            editMode={this.state.editMode}
                            prefix={this.state.prefix + "." + i}
                            key={this.state.uniqueKey + i}
                        />) :
                    undefined
                    }
                    </Fragment>
            </Fragment>
            );
    }
}