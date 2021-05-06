import React, { Component, Fragment } from 'react';
import { IContent, ISection, ArticleContentProps } from './Interfaces';
import ParagraphSection from './ParagraphSection';
import HeaderSection from './HeaderSection';

import '../Styles/EncyclopediaPage.css';

const TitleSplitter = String.fromCharCode(1);
const SubSectionSplitter = String.fromCharCode(29);

export class ArticleContent extends Component<ArticleContentProps, { content: IContent }> {

    constructor(props: ArticleContentProps) {
        super(props);
        this.state = {
            content: JSON.parse(props.content) as IContent,
        }
    }

    render() {
        const content = this.state.content;
        const update = this.updateContent.bind(this);
        const summary = <ParagraphSection text={content.summary} editable={this.props.editable} update={update} />

        if (!content.sections || content.sections.length < 1) {
            return summary;
        } else {
            return (
                <Fragment>
                    {summary}
                    <Fragment>
                        {content.sections.map(
                            (section, index) =>
                                <Section
                                    content={section}
                                    index={(index+1).toString()}
                                    editable={this.props.editable}
                                    update={update}
                                />)}
                    </Fragment>
                </Fragment>
            );
        }
    }

    private updateContent() {
        this.setState({ content: this.state.content });
        console.log(this.state.content);
    }
}

interface ISectionProps {
    content: ISection,
    index: string,
    editable?: boolean,
    update: () => void,
}

function Section(props: ISectionProps) {
    return (
        <Fragment>
            <HeaderSection text={props.content.title} editable={props.editable} update={props.update} index={props.index} />
            {props.content.summary ? <ParagraphSection text={props.content.summary} editable={props.editable} update={props.update} /> : null}
            {props.content.subsections ?
                <Fragment>{props.content.subsections.map((value, i) => buildSection(value, i+1, props))}
                </Fragment> :
                null}
        </Fragment>
    );
}

function buildSection(value: ISection, i: number, props: ISectionProps): JSX.Element {
    const index = props.index === "" ? i.toString() : props.index + "." + i;
    return (
        <Section
            content={value}
            index={index}
            editable={props.editable}
            update={props.update}
        />);
}

function TableOfContents(props: { sections: string[] }) {
    return (
        <ul>
            {props.sections.map((sec, i) => <SectionTableOfContents index={i + 1} section={sec} />)}
        </ul>
    );
}

function SectionTableOfContents(props: { index: number, section: string }) {
    const title = props.section.split(TitleSplitter, 1)[0];
    const subsections = props.section.substr(title.length + 1).split(SubSectionSplitter).filter(val => val.includes(TitleSplitter));
    console.log(subsections);
    return (
        <li>
            {props.index} <a href={"#" + title}>{title}</a>
            <ul>
                {subsections.map((sec, i) => {
                    const title = sec.split(TitleSplitter, 1)[0];
                    return (<li>{props.index + "." + (i + 1)} <a href={"#" + title}>{title}</a></li>);
                })}
            </ul>
        </li>
    );
}

export default ArticleContent;