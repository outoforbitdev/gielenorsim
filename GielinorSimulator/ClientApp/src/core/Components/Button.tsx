import React, { Component } from 'react';

interface ButtonProps {
    text?: string;
    onClick?: () => void;
}

interface ButtonState {
    text: string;
}

export class Button extends Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);

        this.state = {
            text: this.props.text ?? "",
        };
    }

    render() {
        return <button
            onClick={this.__onClick.bind(this)}
        >{this.state.text}</button>
    }

    private __onClick(): void {
        if (this.props.onClick) {
            this.props.onClick();
        }
        return undefined;
    }
}