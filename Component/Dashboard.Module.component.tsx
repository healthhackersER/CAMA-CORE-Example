import React, { Component } from 'react';
import { Text } from 'react-native';
import {Module} from '../Models/Module.model';

interface ModuleProps extends React.Props<any> {
    $Module: Module;
}

export class DashboardModuleComponent extends Component<ModuleProps, any> {
    render() {
        return (
            <Text>{this.props.$Module.label}</Text>
        );
    }
}