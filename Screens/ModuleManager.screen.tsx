
import React from 'react';
import { View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Red } from '../Context/Modules.context.provider';

interface ModuleManagerScreenProps extends React.Props<any> {
    navigation: any
}

export class ModuleManagerScreen extends React.Component<ModuleManagerScreenProps, any> {
    static navigationOptions = {  
      title: 'Module Manager',
      tabBarLabel:'Modules',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-apps'}/>  
          </View>),
      barStyle: { backgroundColor: '#7933FF' }, 
    };
    render() {
      const navigation = this.props.navigation;
      return (
        <View style={{ flex: 1}}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the {navigation.state.routeName} screen</Text>
            <Button  title="Go to Home" onPress={() => navigation.navigate('Home')}/> 
          </View>
          <View>
              <Red></Red>
          </View>
        </View>
      );
    }
  }