
import React from 'react';
import { View, Text, Button} from 'react-native';
import {NavBar} from '../Component/Navbar.component'
import Icon from 'react-native-vector-icons/Ionicons';
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('cancer-data.sqlite');
db.exec([{ sql: 'CREATE TABLE IF NOT EXISTS Test(id int,test text)', args: [] }], true, () => {});
const insertSql = async () => {
  db.exec([{ sql: 'INSERT 1,"Hello" INTO Test', args: [] }], false, () => {});
  console.log("Hallo Welt");
};

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
            <Button title="INSERT" onPress={insertSql} />
          </View>
        </View>
      );
    }
  }