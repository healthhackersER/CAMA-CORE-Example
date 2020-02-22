
import React from 'react';
import { View, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Module} from '../Component/Module.component';

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
        <SafeAreaView style={styles.container}>
           <Module uri="https://www.healthhackers.de/cancermanagement/"></Module>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });