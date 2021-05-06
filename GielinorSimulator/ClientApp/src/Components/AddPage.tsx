import React, { Component, Fragment } from 'react';
import Entity, { EntityType } from '../Model/Entity';

interface AddPageProps {
    updateCurrent(entityType: EntityType, name: string): void,
}

interface AddPageState {
    expanded: boolean,
    currentName: string,
    currentType: EntityType,
}

export class AddPage extends Component<AddPageProps, AddPageState> {

    constructor(props: AddPageProps) {
        super(props);
        this.state = {
            expanded: false,
            currentName: "",
            currentType: EntityType.Kingdom,
        }
    }

    render() {
        const creationForm =
            <Fragment>
                <br />
                <label>Name: </label>
                <input type="text" onChange={this.__updateName.bind(this)} />
                <br />
                <label>Type: </label>
                <select defaultValue={this.state.currentType} onChange={this.__updateType.bind(this)} >
                    <option value={EntityType.Kingdom}>Kingdom</option>
                    <option value={EntityType.Being}>Being</option>
                </select>
                <br />
                <input type="button" value="Create New Page" disabled={this.state.currentName === ""} />
            </Fragment>

        return (
            <div>
                <input type="button" value="Add Page" disabled={this.state.expanded} onClick={this.__addPage.bind(this)} />
                {this.state.expanded ? creationForm : null}
            </div>
        );
    }

    private __addPage() {
        this.setState({ expanded: true });
    }

    private __updateName(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ currentName: event.target.value });
    }

    private __updateType(event: React.ChangeEvent<HTMLSelectElement>) {
        const entityType = +event.target.value as EntityType
        this.setState({ currentType: entityType });
    }
}

export default AddPage;