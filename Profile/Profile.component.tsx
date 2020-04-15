import React, {Component} from 'react';
import {View} from 'react-native';
import store from '../store/loginStore'
import {Button, ListItem, Avatar, Text} from 'react-native-elements';

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
            <View style={{ flex: 1, padding:'10px'}}>
                <View style={{ flex: 0.2, padding:'10px'}}>
                    <Avatar
                            size="large"
                            rounded
                            source={{
                                uri: "https://www.healthhackers.de/wp-content/uploads/2018/05/HH_Logo_Bunt-200x200.png"
                            }}
                            containerStyle={{alignSelf: 'flex-end'}}
                        ></Avatar>
                </View>
                <View style={{flex:0.6}}>
                    {Object.getOwnPropertyNames(state).map((PropName, i) => 
                        <ListItem
                            key={i}
                            title={PropName}
                            subtitle={state[PropName]}
                            bottomDivider
                        />
                    )}
                </View>
                <View style={{flex:0.2, justifyContent:'flex-end'}}>
                    <Button 
                        title="Logout" 
                        type="outline"
                        onPress={() =>this.onLogout()}>
                    </Button>
                </View>
            </View>
        );
  }
}