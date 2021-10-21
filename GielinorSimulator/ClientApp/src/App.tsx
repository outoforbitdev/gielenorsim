import React, { Component } from 'react';
import { Activity, LoginPage, LoadingPage, Workspace } from './core/Framework'

interface AppState {
    phase: AppPhase;
    userKey: string;
    sessionKey: string;
}

enum AppPhase {
    Login,
    Load,
    Workspace,
}

export default class App extends Component<{}, AppState> {
    static displayName = App.name;

    constructor(props: {}) {
        super(props);
        this.state = {
            phase: AppPhase.Login,
            userKey: "",
            sessionKey: "",
        };
    }

    render() {
        const startUpActivity = new Activity({ userKey: this.state.userKey, sessionKey: this.state.sessionKey ?? "" });
        switch (this.state.phase) {
            case AppPhase.Login:
                return <LoginPage onLogin={this.__onLogin.bind(this)} />;
                break;
            case AppPhase.Load:
                return <LoadingPage userKey={this.state.userKey} onLoad={this.__onLoad.bind(this)} />;
                break;
            case AppPhase.Workspace:
            default:
                return <Workspace userKey={this.state.userKey} sessionKey={this.state.sessionKey ?? ""} startupActivities={[startUpActivity]} />;
        }
    }

    __onLogin(userKey: string) {
        this.setState({
            phase: AppPhase.Load,
            userKey: userKey,
        });
    }

    __onLoad(sessionKey: string) {
        this.setState({
            phase: AppPhase.Workspace,
            sessionKey: sessionKey,
        })
    }
}
