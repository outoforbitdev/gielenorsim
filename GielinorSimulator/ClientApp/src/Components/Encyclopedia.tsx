import { Activity } from '../core/Framework';
import { InfoBox, Article, SearchBar } from '../core/Components';

interface EncyclopediaProps {
}

interface EncyclopediaState extends EncyclopediaProps {

}

export class Encyclopedia extends Activity<EncyclopediaProps, EncyclopediaState> {
    constructor(props: EncyclopediaProps) {
        super(props);
        this.name = "Encyclopedia";
    }

    render() {
        const exampleSections = [
            {
                header: "Header One",
                lines: [
                    {
                        label: "Label One",
                        value: 1,
                    },
                    {
                        label: "This is a super long label that gets really long",
                        value: "boo",
                    },
                ],
            }
        ]

        const article = {
            title: "Article Title",
            summary: "this is a summary",
            sections: [
                {
                    header: "Section 1 Header",
                    content: "content",
                    subsections: [
                        {
                            header: "Section 1.1 Header",
                            content: "more content",
                        }
                    ],
                },
            ],
        }

        return (
            <Activity>
                <div><SearchBar /></div>
                <div>
                <InfoBox title={"Example InfoBox"}
                    editMode={true}
                    sections={exampleSections}
                />
                    <Article article={article} editable={false} />
                </div>
            </Activity>
        );
    }
}