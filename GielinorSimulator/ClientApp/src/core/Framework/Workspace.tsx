import { Component } from 'react';
import { Activity } from './Activity';
import { TabStrip } from '../Components';

interface WorkspaceProps {
    userKey: string;
    sessionKey: string;
    startupActivities?: Activity[];
}

interface WorkspaceState {
    userKey: string;
    sessionKey: string;
    activities: Activity[];
    tabs: string[]
}

export class Workspace extends Component<WorkspaceProps, WorkspaceState> {
    constructor(props: WorkspaceProps) {
        super(props);
        this.state = {
            userKey: this.props.userKey,
            sessionKey: this.props.sessionKey,
            activities: this.props.startupActivities ?? [],
            tabs: this.props.startupActivities?.map(value => "name") ?? [],
        };
    }

    render() {
        return (
            <div>
                <div></div>
                <TabStrip
                    tabs={this.state.tabs}
                    onTabSelect={this.__onTabSelect.bind(this)}
                />
                <Activity
                    userKey={this.state.userKey}
                    sessionKey={this.state.sessionKey}
                />
            </div>
        );
    }

    __onTabSelect(activityName: string) {

    }
}