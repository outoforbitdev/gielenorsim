export interface ArticleContentProps {
    content: string,
    editable?: boolean,
}

export interface IStringValue {
    value: string,
}

export interface IContent {
    summary: IStringValue,
    sections?: ISection[],
}

export interface ISection {
    title: IStringValue,
    summary: IStringValue,
    subsections?: ISection[],
}