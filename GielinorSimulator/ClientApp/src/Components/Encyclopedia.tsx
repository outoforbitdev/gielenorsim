import React, { Component } from 'react';
import { EntityType, Entity } from '../Model/Entity';
import { Kingdom } from '../Model/Kingdom';
import * as Functions from '../Model/Functions';
import EncyclopediaPage from './EncyclopediaPage';

import '../Styles/EncyclopediaPage.css';

interface EncyclopediaProps {
}

interface EncyclopediaState {
    past: Entity[],
    current?: Entity,
    future: Entity[],
    expanded: boolean,
}

export class Encyclopedia extends Component<EncyclopediaProps, EncyclopediaState> {

    constructor(props: EncyclopediaProps) {
        super(props);
        this.state = {
            past: [],
            future: [],
            expanded: true,
        }
    }

    render() {
        return this.state.current ? <EncyclopediaPage entity={this.state.current} expanded={this.state.expanded} /> : null
    }

    componentDidMount() {
        this.__goTo(EntityType.Kingdom, "Misthalin");
    }

    private __pushCurrent(array: Entity[]) {
        if (this.state.current) {
            return array.concat([this.state.current]);
        }
        return array;
    }

    private async __goTo(entityType: EntityType, name: string) {
        const entity = await this.__getEntity(entityType, name);

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

    private async __getEntity(entityType: EntityType, name: string): Promise<Entity | undefined> {
        const url = "API/" + EntityType[entityType] + "/" + name;
        const response = await (await fetch(url)).json();
        const data = new Kingdom(Functions.standardize(response));
        if (data as Entity) {
            return data as Entity;
        }
        else {
            return undefined;
        }
    }
}

export default Encyclopedia;