
import React, { Component } from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
interface NavBarProps extends React.Props<any> {
    navigation: any
}

export class NavBar extends React.Component<NavBarProps, any> {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.navigationContainer}>
                    <TouchableHighlight style={styles.fullWidthButton} onPress={() => navigate('Home')}>
                        <Text>Home</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.fullWidthButton} onPress={() => navigate('Profile')}>
                        <Text>Profile</Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}
var styles = StyleSheet.create({
    navigationContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'stretch'
    },
    fullWidthButton: {
        flex: 1,
        alignItems: 'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'stretch',
    }
  });