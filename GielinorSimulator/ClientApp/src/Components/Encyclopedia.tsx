import React, { Component } from 'react';
import { Entity } from '../Model/Entity';
import { Kingdom } from '../Model/Kingdom';
import * as Functions from '../Model/Functions';
import EncyclopediaPage from './EncyclopediaPage';
import SearchBar from './SearchBar';

import '../Styles/Encyclopedia.css';
import AddPage from './AddPage';
import { get, getEntity } from './Core';
import { EntityRequest, EntityResponse } from '../Model/Result';

interface EncyclopediaProps {

}

interface EncyclopediaState {
    past: Entity[],
    current?: Entity,
    future: Entity[],
    expanded: boolean,
    searchTerm: string,
}

export class Encyclopedia extends Component<EncyclopediaProps, EncyclopediaState> {

    constructor(props: EncyclopediaProps) {
        super(props);
        this.state = {
            past: [],
            future: [],
            expanded: true,
            searchTerm: "",
        }
    }

    render() {
        if (this.state.current) {
            return (
                <div>
                    <input type="button" value="Back" disabled={this.state.past.length < 1} />
                    <input type="button" value="Forward" disabled={this.state.future.length < 1} />
                    <br />
                    <SearchBar updateSearch={this.__updateSearch} />
                    <AddPage updateCurrent={this.__goTo.bind(this)} />
                    <EncyclopediaPage entity={this.state.current} expanded={this.state.expanded} />
                </div>
            );
        } else {
            return null;
        }
    }

    componentDidMount() {
        this.__goTo("Misthalin");
    }

    private __pushCurrent(array: Entity[]) {
        if (this.state.current) {
            return array.concat([this.state.current]);
        }
        return array;
    }

    private async __goTo(name: string) {
        const entity = await this.__getEntity(name);
        console.log(entity);

        if (entity) {
            this.setState({
                past: this.__pushCurrent(this.state.past),
                current: entity,
                future: [],
            });
        }
    }

    private __goBack() {
        this.setState({
            current: this.state.past[this.state.past.length - 1],
            past: this.state.past.slice(0, this.state.past.length - 1),
            future: this.__pushCurrent(this.state.future),
        });
    }

    private __goForward() {
        this.setState({
            current: this.state.future[this.state.future.length - 1],
            future: this.state.future.slice(0, this.state.future.length - 1),
            past: this.__pushCurrent(this.state.past),
        })
    }

    private async __getEntity(name: string): Promise<Entity | undefined> {
        const url = "API/Encyclopedia/Entity";
        const request = new EntityRequest();
        request.Name = name;
        request.Key = "Foundation";
        const data = (await getEntity<EntityResponse>(url, request));
        console.log("Entity:");
        console.log(data.Entity);
        return data.Success ? data.Entity : undefined;
    }

    private __updateSearch(searchTerm: string) {
        console.log(searchTerm);
    }
}

export default Encyclopedia;