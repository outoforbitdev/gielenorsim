import React, { Component } from 'react';
import { IStringValue } from './Interfaces';
import '../Styles/ParagraphSection.css';

interface IParagraphSectionProps {
    text: IStringValue,
    editable?: boolean,
    update?: () => void,
}

interface IParagraphSectionState {
    currentValue: string,
    defaultValue: string,
}

export class ParagraphSection extends Component<IParagraphSectionProps, IParagraphSectionState> {
    constructor(props: IParagraphSectionProps) {
        super(props);
        this.state = {
            defaultValue: props.text.value,
            currentValue: props.text.value,
        }
    }

    render() {
        if (this.props.editable) {
            const update = this.__updateStateValue.bind(this);
            const accept = this.__acceptChanges.bind(this);
            const cancel = this.__cancelChanges.bind(this);
            return (
                <div>
                    <textarea value={this.state.currentValue} onChange={update} />
                    <br />
                    <input type="button" onClick={accept} value="Accept" />
                    <input type="button" onClick={cancel} value="Cancel" />
                </div>
            );
        }
        else {
            return <p>{ this.props.text.value }</p>;
        }
    }

    private __updateStateValue(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ currentValue: event.target.value });
    }

    private __acceptChanges() {
        this.props.text.value = this.state.currentValue;
        if (this.props.update) {
            this.props.update();
        }
    }

    private __cancelChanges() {
        this.setState({ currentValue: this.props.text.value });
    }
}

export default ParagraphSection;