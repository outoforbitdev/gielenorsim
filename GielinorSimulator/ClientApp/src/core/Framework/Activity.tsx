import { Component } from 'react';
import '../Styles/Activity.css';

interface IActivity {
    name: string;
}

export class Activity<P, S> extends Component<P, S> implements IActivity {
    constructor(props: P) {
        super(props);
        this.name = "Activity";
    }

    public name: string;

    render() {
        return(
        <div className={"OODCoreFrameworkActivity"}>
            {this.props.children}
        </div>);
    }
}