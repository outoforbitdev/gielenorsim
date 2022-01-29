import { useState } from 'react';
import { InfoBox, InfoBoxLine, InfoBoxSection } from '../core/Components';
import { Race } from '../Model/Race';

interface IRaceInfoBoxProps {
    value: Race,
}

export function RaceInfoBox(props: IRaceInfoBoxProps) {
    const [editMode, setEditMode] = useState(false);

    return (
        <InfoBox title={props.value.name}
            editMode={editMode}
            toggleEdit={() => {
                setEditMode(!editMode);
            }}>
            <InfoBoxSection header={"Example Header"} editMode={editMode}>
                <InfoBoxLine label={"Example Label"} value={props.value.name} editMode={editMode} even={false} />
            </InfoBoxSection>
        </InfoBox>
    );
}

//export class RaceInfoBoxGenerator {
//    constructor(props: { value: Race }) {
//        super(props);
//        this._componentName = "OODGielinorSimulatorRaceInfoBoxGenerator";
//        this.state = {
//            value: props.value,
//            editMode: false,
//        }
//    }

//    render() {
//        return (
//            <InfoBox title={this.state.value.name}
//                editMode={this.state.editMode}
//                toggleEdit={() => {
//                    this.setState({ editMode: !this.state.editMode });
//                }}>
//                <InfoBoxSection header={"Example Header"} editMode={this.state.editMode}>
//                    <InfoBoxLine label={"Example Label"} value={this.state.value.name} editMode={this.state.editMode} even={false} />
//                </InfoBoxSection>
//            </InfoBox>
//        );
//    }
//}