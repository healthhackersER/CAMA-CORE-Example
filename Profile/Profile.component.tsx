import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import store from '../store/loginStore'

export class Profile extends Component<any> {

    onLogout = () => {
        store.dispatch({
            type: "LOGOUT"
        })
    }
    render() {
        const state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
        });

        return (
            <View style={{ flex: 1}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{state.email}</Text>
                    <Text>{state.password}</Text>
                    <Text>{state.loginSuccess}</Text>
                    <Button title="Logout" onPress={() =>this.onLogout()}></Button>
                </View>
            </View>
        );
  }
}