import React, { Component } from 'react';
import { Button } from '../Components';

interface LoadingPageProps {
    userKey: string;
    onLoad: (sessionKey: string) => void;
}

interface LoadingPageState {
    userKey: string;
}

export class LoadingPage extends Component<LoadingPageProps, LoadingPageState> {
    constructor(props: LoadingPageProps) {
        super(props);
        this.state = {
            userKey: this.props.userKey,
        };
    }

    render() {
        return <Button text={ "Load" } onClick={ this.__onLoad.bind(this) }/>
    }

    __onLoad() {
        const key = "dummySessionKey";
        this.props.onLoad(key);
    }
}