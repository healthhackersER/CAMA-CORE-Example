
import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface DashboardProps extends React.Props<any> {
    name: string
}

export class DashboardComponent extends Component<DashboardProps, any> {
    render() {
        return (
        <View style={{alignItems:'center'}}>
            <Text>
                <h1>Hello, {this.props.name}!</h1>
            </Text>
        </View>
        );
    }
}