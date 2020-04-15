import React, {Component} from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';
import store from '../store/loginStore'


export class Login extends Component<any> {
    state = store.getState()
    setEmail = (email: string) =>{
        this.state.email = email
    }
    onLogin = () => {
        store.dispatch({
            type: "LOGIN",
            value: {email: this.state.email}
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
                    <TextInput
                        placeholder="Your Email"
                        onChangeText={text => this.setEmail(text)}
                        defaultValue={state.email}
                    />
                    <TextInput secureTextEntry={true} value={state.password} />
                    <Button title="Login" onPress={() =>this.onLogin()}></Button>
                </View>
            </View>
        );
  }
}