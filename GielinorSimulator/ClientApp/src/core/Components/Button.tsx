import { Component } from 'react';
import { UniqueKey } from './Component';
import { IComponentProps } from './IComponentProps';

interface IButtonProps extends IComponentProps {
    text?: string;
    onClick?: () => void;
}

export function Button(props: IButtonProps) {
    const uniqueKey = UniqueKey("OODCoreComponentsButton");

    return (
        <button
            onClick={props.onClick}
            className={props.className}
        >
            {props.text}
        </button>
    );
}