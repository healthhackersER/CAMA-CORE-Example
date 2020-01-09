
import React from 'react';
import { View, Text} from 'react-native';
import {NavBar} from '../Component/Navbar.component'

interface ProfileScreenProps extends React.Props<any> {
    navigation: any
}

export class ProfileScreen extends React.Component<ProfileScreenProps, any> {
    static navigationOptions = {
      title: 'Profile Screen'
    };
    render() {
      const navigation = this.props.navigation;
      return (
        <View>
          <NavBar navigation={navigation}/>
          <Text>This is the {navigation.state.routeName} screen</Text>
        </View>
      );
    }
  }