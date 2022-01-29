//import { Component, useState } from 'react';
//import { Activity } from './Activity';
//import { TabStrip, Button } from '../Components';
//import '../Styles/Workspace.css';

//class GenericActivity extends Activity<{}, {}>{ }

//interface WorkspaceProps {
//    userKey: string;
//    sessionKey: string;
//    startupActivities: React.ReactElement[];
//    name: string;
//}

//interface WorkspaceState {
//    userKey: string;
//    sessionKey: string;
//    activities: Map<string, JSX.Element>;
//    tabs: string[]
//    currentActivity: JSX.Element;
//    name: string;
//}

//export function Workspace(props: WorkspaceProps): JSX.Element {
//    const [tabs, setTabs] = useState(props.startupActivities.map(value => value.name));
//    const [currentActivity, setCurrentActivity] = useState<React.ReactElement>();
//    const initialActivities = new Map(
//        props.startupActivities.map(act => [act.name, act]));
//    const [activities, setActivities] = useState(initialActivities);
//    const [name, setName] = useState(props.name);

//    return (
//        <div className={"OODCoreFrameworkWorkspace"}>
//            <div><h1>{name}</h1></div>
//            <TabStrip
//                tabNames={new Set(tabs)}
//                onTabSelect={onTabSelect(activities, setCurrentActivity)}
//            />
//            <currentActivity />
//        </div>
//    );
//}

//function onTabSelect(
//    activities: Map<string, React.ReactElement>,
//    setCurrentActivity: (activity: React.ReactElement) => void)
//{
//    return (activityName: string) => {
//        const activity = activities.get(activityName);

//        if (activity) {
//            setCurrentActivity(activity);
//        }
//    }
//}

////export class Workspace extends Component<WorkspaceProps, WorkspaceState> {
////    constructor(props: WorkspaceProps) {
////        super(props);
////        this.state = {
////            userKey: this.props.userKey,
////            sessionKey: this.props.sessionKey,
////            activities: new Map(
////                this.props.startupActivities.map(act => [act.name, act])),
////            tabs: this.props.startupActivities.map(value => value.name),
////            currentActivity: this.props.startupActivities[0],
////            name: this.props.name,
////        };
////    }

////    render() {
////        return (
////            <div className={"OODCoreFrameworkWorkspace"}>
////                <div><h1>{this.state.name}</h1></div>
////                    <TabStrip
////                        tabNames={new Set(this.state.tabs)}
////                        onTabSelect={this.__onTabSelect.bind(this)}
////                    />
////                {this.state.currentActivity.render()}
////            </div>
////        );
////    }

////    __onTabSelect(activityName: string) {
////        const activity = this.state.activities.get(activityName);

////        if (activity) {
////            this.setState({
////                currentActivity: activity,
////            });
////        }
////    }
////}