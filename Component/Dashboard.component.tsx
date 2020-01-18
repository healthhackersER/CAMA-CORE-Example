import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Module} from '../Models/Module.model';
import {DashboardModuleComponent} from './Dashboard.Module.component';

interface DashboardProps extends React.Props<any> {
    $Modules: Array<Module>;
}

export class DashboardComponent extends Component<DashboardProps, any> {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                {this.props.$Modules.map((module, key) => {
                    return (
                        <DashboardModuleComponent $Module={module}></DashboardModuleComponent>
                    );
                })}
            </View>
        );
    }
}