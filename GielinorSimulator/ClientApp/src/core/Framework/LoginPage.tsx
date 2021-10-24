import React, { Component } from 'react';
import { Button } from '../Components';

interface LoginPageProps {
    onLogin: (userKey: string) => void;
}

interface LoginPageState {
}

export class LoginPage extends Component<LoginPageProps, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <Button text={ "Login" } onClick={ this.__onLogin.bind(this) }/>
    }

    __onLogin() {
        const key = "dummyKey";
        this.props.onLogin(key);
    }
}