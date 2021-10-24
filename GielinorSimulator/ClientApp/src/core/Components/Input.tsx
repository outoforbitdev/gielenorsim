import React, { Component } from 'react';
import '../Styles/Input.css';

interface IInputProps<T> {
    value: T;
    onValueChange: (val: T) => void;
}

interface IInputState<T> extends IInputProps<T>{
}

export class Input<T> extends Component<IInputProps<T>, IInputState<T>> {
    constructor(props: IInputProps<T>) {
        super(props);

        this.state = {
            value: this.props.value,
            onValueChange: this.props.onValueChange,
        };
    }

    render() {
        switch (typeof this.state.value) {
            case "number":
                return <input type="number"
                    defaultValue={this.state.value}
                    className="OODCoreComponentInput" />
            case "string":
            default:
                return <input type="text"
                    defaultValue={this.state.value as unknown as string}
                    className="OODCoreComponentInput" />
        }
    }
}