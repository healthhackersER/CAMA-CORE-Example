import React, {Component} from 'react';
import {View } from 'react-native';
import store from '../store/loginStore'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button} from 'react-native-elements';

export class Login extends Component<any> {
    onLogin = (state) => {
        store.dispatch({
            type: "LOGIN",
            value: {email: state.email}
        })
    }
    render() {
        const state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
        });

        const leftIconContainerStyle = {'margin-right': '15px'}
        return (
            <View style={{ flex: 1, padding:'10px'}}>
                <View style={{flex: 0.8, alignItems: 'center', justifyContent: 'center', padding:'25%'}}>
                    <Input
                        label='Email'
                        placeholder='Your Email'
                        keyboardType='email-address'
                        onChangeText={text => state.email}
                        defaultValue={state.email}
                        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        leftIconContainerStyle={leftIconContainerStyle}
                    />
                    <Input 
                        label='Password'
                        secureTextEntry={true} 
                        leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                        leftIconContainerStyle={leftIconContainerStyle}
                        value={state.password} 
                    />
                </View>
                <View style={{flex: 0.2, width:'100%', justifyContent:'flex-end'}}>
                    <Button 
                        title="Login" 
                        type="outline"
                        onPress={() =>this.onLogin(state)}>
                        icon={<Icon name="unlock-alt" size={15} color="white"/>}
                    </Button>
                </View>
            </View>
        );
  }
}