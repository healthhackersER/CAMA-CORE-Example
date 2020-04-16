
import React from 'react';
import { View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Login} from './Login.component';
import {Profile} from './Profile.component';
import store from '../store/loginStore'

interface ProfileScreenProps extends React.Props<any> {
    navigation: any
}

export class ProfileScreen extends React.Component<ProfileScreenProps, any> {
    static navigationOptions = {  
      title: 'Profile Screen',
      tabBarLabel:'Profile',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          </View>),
      barStyle: { backgroundColor: '#7933FF' }, 
    };
    render() {
      const navigation = this.props.navigation;
      this.state = store.getState();
      store.subscribe(() => {
        this.setState(store.getState());
      });

      let content = <Login/>
      if (this.state.loginSuccess){
        content = <Profile/>
      }

      return (
        <View style={{ flex: 1.0}}>
          {content}
        </View>
      );
    }
  }
