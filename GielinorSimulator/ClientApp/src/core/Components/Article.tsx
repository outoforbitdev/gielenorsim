import React, { Component, Fragment } from 'react';
import { ArticleSection, IArticleSection } from './ArticleSection';
import { v4 as uuidv4 } from 'uuid';

interface IArticle {
    title: string;
    summary: string;
    sections: IArticleSection[];
}

interface IArticleProps {
    article: IArticle;
    editable: boolean;
    onSaveChanges?: (article: IArticle) => void;
}

interface IArticleState extends IArticleProps{
    editMode: boolean;
    uniqueKey: string;
}

export class Article extends Component<IArticleProps, IArticleState> {
    constructor(props: IArticleProps) {
        super(props);

        this.state = {
            article: this.props.article,
            editable: this.props.editable,
            onSaveChanges: this.props.onSaveChanges,
            editMode: false,
            uniqueKey: "OODCoreComponentsArticle" + uuidv4(),
        };
    }

    render() {
        return (
            <Fragment>
                <h1>{this.state.article.title}</h1>
                <p>{this.state.article.summary}</p>
                {this.state.article.sections.map((section,i) =>
                    <ArticleSection
                        section={section}
                        editMode={this.state.editMode}
                        prefix={i.toString()}
                        key={this.state.uniqueKey + i}
                    />)
                }
            </Fragment>
        );
    }
}