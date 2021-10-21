import { Component } from 'react';

interface ActivityProps {
    userKey: string;
    sessionKey: string;
}

interface ActivityState {
    userKey: string;
    sessionKey: string;
}

export class Activity extends Component<ActivityProps, ActivityState> {
    constructor(props: ActivityProps) {
        super(props);
        this.state = {
            userKey: this.props.userKey,
            sessionKey: this.props.sessionKey,
        };
    }

    render() {
        return "run session with key: " + this.state.sessionKey;
    }
}