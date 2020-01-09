
import React from 'react';
import { View, Text, Button} from 'react-native';
import {NavBar} from '../Component/Navbar.component'
import Icon from 'react-native-vector-icons/Ionicons';

interface HomeScreenProps extends React.Props<any> {
    navigation: any
}

 

export class HomeScreen extends React.Component<HomeScreenProps, any> {
    static navigationOptions = {
      title: 'Home Screen',
      tabBarLabel:'Home',  
      tabBarIcon: ({ tintColor }) => (  
          <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
          </View>),
      barStyle: { backgroundColor: '#4600EE' }, 
    };
    render() {
      const navigation = this.props.navigation;
      return (
        <View style={{ flex: 1}}>
          <View style={{flex: 0.1}}>
            <NavBar  navigation={navigation}/>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the {navigation.state.routeName} screen</Text>
            <Button  title="Go to Profile" onPress={() => navigation.navigate('Profile')}/> 
          </View>
        </View>
      );
    }
  }