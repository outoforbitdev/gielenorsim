import React from 'react';
import logo from './logo.svg';
import { Entity } from '../Model/Entity'

interface IInfoBoxData {
    Entity: string,
}

class Infobox extends React.Component {
    constructor(props: {entity: Entity}) {
        super(props);
        this.state = { isHome: true };
    }

    public render() {
        return (
            <table><tr><td></td></tr></table>
        );
    }

    private __setState(props: IInfoBoxData) {
        this.setState(props);
    }
}

export default Infobox;
