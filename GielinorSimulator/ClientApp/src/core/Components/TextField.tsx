import React, { Component } from 'react';
import '../Styles/Input.css';

interface ITextField {
    defaultValue?: string;
    onValueChange?: (val: string) => void;
    onQuickValidate?: (val: string) => boolean;
    onFullValidate?: (val: string) => boolean;
}

interface ITextField extends ITextField {
    value: string;
}

export class TextField extends Component<ITextField, ITextField> {
    constructor(props: ITextField) {
        super(props);

        this.state = {
            defaultValue: this.props.defaultValue,
            onValueChange: this.props.onValueChange,
            onQuickValidate: this.props.onQuickValidate,
            onFullValidate: this.props.onFullValidate,
            value: this.props.defaultValue
        };
    }

    render() {
        return (
            <input type="text"
                value={this.state.defaultValue}
                className="OODCoreComponentInput"
                onBlur={this.__onBlur.bind(this)}
            />
    }

    private __onValueChange(val: string) {
        this.setState({
            value: val,
        });

        if (this.state.onQuickValidate(val)) {
            this.state.onValueChange(val);
        }
    }

    private __onBlur(event: React.FocusEvent<HTMLInputElement>) {
        if (!this.state.onQuickValidate(val) || !this.state.onFullValidate(val)) {
            event.currentTarget.focus();
        }
    }

    private __onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.keyCode === 28) {
            this.setState({
                value: this.state.defaultValue,
            });
        }
    }
}