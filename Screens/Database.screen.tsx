
import React from 'react';
import { View, Text, Button} from 'react-native';
import {NavBar} from '../Component/Navbar.component'
import Icon from 'react-native-vector-icons/Ionicons';

interface DatabaseScreenProps extends React.Props<any> {
    navigation: any
}

export class DatabaseScreen extends React.Component<DatabaseScreenProps, any> {
    static navigationOptions = {  
      title: 'Database Screen',
      tabBarLabel:'Database',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-beer'}/>  
          </View>),
      barStyle: { backgroundColor: '#7933FF' }, 
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
            <Button  title="Go to Home" onPress={() => navigation.navigate('Home')}/> 
          </View>
        </View>
      );
    }
  }