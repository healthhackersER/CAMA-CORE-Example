import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

interface ModuleProps extends React.Props<any> {
    uri: string
}

export class Module extends Component<ModuleProps, any> {
    render() {
        return (
            <WebView style={styles.View} source={{ uri: this.props.uri }} />
        );
  }
}

const styles = StyleSheet.create({
    View: {
        marginTop: 20,
    },
  })