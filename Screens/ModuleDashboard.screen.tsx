
import React from 'react';
import { View, Text, Button} from 'react-native';
import {NavBar} from '../Component/Navbar.component'
import Icon from 'react-native-vector-icons/Ionicons';
import { DashboardComponent } from '../Component/Dashboard.component';

interface ModuleDashboardScreenProps extends React.Props<any> {
    navigation: any
} 

export class ModuleDashboardScreen extends React.Component<ModuleDashboardScreenProps, any> {
  $Modules = [{
    icon: 'home',
    label: 'Lorem Ipsum 1',
    description: 'Lorem Ipsum Dole sole ...',
    URL: 'http://Lorem Ipsum Dole Silwasdf..'
  },{
    icon: 'samel',
    label: 'Lorem Ipsum 2',
    description: 'Lorem Ipsum Dole sole ...',
    URL: 'http://Lorem Ipsum Dole Silwasdf..'
  }]  
  static navigationOptions = {
      title: 'Module Dashboard',
      tabBarLabel:'Modules',  
      tabBarIcon: ({ tintColor }) => (  
          <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-question'}/>  
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
            <DashboardComponent $Modules={this.$Modules}></DashboardComponent> 
          </View>
        </View>
      );
    }
  }