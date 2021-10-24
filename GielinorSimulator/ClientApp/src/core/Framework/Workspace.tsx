import { Component } from 'react';
import { Activity } from './Activity';
import { TabStrip, Button } from '../Components';
import '../Styles/Workspace.css';

class GenericActivity extends Activity<{}, {}>{ }

interface WorkspaceProps {
    userKey: string;
    sessionKey: string;
    startupActivities: GenericActivity[];
    name: string;
}

interface WorkspaceState {
    userKey: string;
    sessionKey: string;
    activities: Map<string, GenericActivity>;
    tabs: string[]
    currentActivity: GenericActivity;
    name: string;
}

export class Workspace extends Component<WorkspaceProps, WorkspaceState> {
    constructor(props: WorkspaceProps) {
        super(props);
        this.state = {
            userKey: this.props.userKey,
            sessionKey: this.props.sessionKey,
            activities: new Map(
                this.props.startupActivities.map(act => [act.name, act])),
            tabs: this.props.startupActivities.map(value => value.name),
            currentActivity: this.props.startupActivities[0],
            name: this.props.name,
        };
    }

    render() {
        return (
            <div className={"OODCoreFrameworkWorkspace"}>
                <div><h1>{this.state.name}</h1></div>
                    <TabStrip
                        tabNames={new Set(this.state.tabs)}
                        onTabSelect={this.__onTabSelect.bind(this)}
                    />
                {this.state.currentActivity.render()}
            </div>
        );
    }

    __onTabSelect(activityName: string) {
        const activity = this.state.activities.get(activityName);

        if (activity) {
            this.setState({
                currentActivity: activity,
            });
        }
    }
}