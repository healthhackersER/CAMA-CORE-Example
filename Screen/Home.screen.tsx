
import React from 'react';
import { View, Text} from 'react-native';
import {NavBar} from '../Component/Navbar.component'

interface HomeScreenProps extends React.Props<any> {
    navigation: any
}

export class HomeScreen extends React.Component<HomeScreenProps, any> {
    static navigationOptions = {
      title: 'Home Screen'
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