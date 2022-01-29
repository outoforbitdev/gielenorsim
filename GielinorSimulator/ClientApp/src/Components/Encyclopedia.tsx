import { Activity } from '../core/Framework';
import { InfoBox, Article, SearchBar } from '../core/Components';
import { Race } from '../Model/Race';
import { RaceInfoBox } from './RaceInfoBoxGenerator';

interface EncyclopediaProps {
}

interface EncyclopediaState extends EncyclopediaProps {
    editMode: boolean;
}

export class Encyclopedia extends Activity<EncyclopediaProps, EncyclopediaState> {
    constructor(props: EncyclopediaProps) {
        super(props);
        this.name = "Encyclopedia";
        this.state = { editMode: false, };
    }

    render() {
        console.log(this.state);

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

        const race = new Race("Elf");

        return (
            <Activity>
                <div><SearchBar /></div>
                <div>
                    <RaceInfoBox value={race} />
                    <Article article={article} editable={false} />
                </div>
            </Activity>
        );
    }
}