
import React, { Ref } from 'react';
import { View, Text, FlatList, Button, Platform} from 'react-native';
import {NavBar} from '../Component/Navbar.component'
import {MetaInformationFields} from './FormMetainfo/MetaInformation.fields'
import Icon from 'react-native-vector-icons/Ionicons';
import * as SQLite from "expo-sqlite";

let db: any = null;
try {
  if(SQLite){
    db = SQLite.openDatabase('cancer-data.sqlite');
    db.transaction(tx => {
      tx.executeSql(
        "drop table if exists Test;"
      );
    });
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists Test (id integer primary key not null, test text);"
      );
    });
  }
} catch{}

interface DatabaseScreenProps extends React.Props<any> {
    navigation: any
    textValue: string
}

export class DatabaseScreen extends React.Component<DatabaseScreenProps, any> {
  constructor(props) {
    super(props);
    // Set startValue of the textinput
    this.state = {startValue: "Teststrings", value: "", databaseentries: []};
  }

  insertSql = async (abc:string) => {
    
    if(db && abc.length){
     db.transaction(
      tx => {
        // Check the number of entries in the DB Table
        tx.executeSql("select * from Test", [], (_, { rows }) =>
          this.setState({entries: rows.length + 2}), (_, error) => console.log(error.message))
        // Add a new entry with higher ID and Value that was inserted in TextField
        tx.executeSql("insert into Test (id, test) values (?, ?)", [this.state.entries, abc], false, (_, error) => console.log(error.message));
        // Add the new array with the inserted value to state.databaseentries
        tx.executeSql("select * from Test", [], (_, { rows }) => {
          console.log(JSON.stringify(rows))
          this.setState({databaseentries: rows._array})
        }, (_, error) => console.log(error.message)
        );
      },
      null,
      console.log("Database Entries added")
    );
      
      //db.exec([{ sql: 'INSERT 1,' + abc + '" INTO Test', args: [] }], false, () => {});
      //var mylen = () => {db.transaction((tx) => {
      //  tx.executeSql('SELECT * FROM Test', [], (tx, results) => {
      //    results.rows.length;
      //  });
      //})}
    } else {
      if (['ios', 'android'].includes(Platform.OS) ){
        console.warn("Please just create a database entry with a value.")
      } else {
        console.error("SQLite not available on your system");
      }
      
    }
  };

  // Function to react on INSERT button
  onTap = () => {
     this.insertSql(this.state.value)
  }
  
  static navigationOptions = {  
    title: 'Database Screen',
    tabBarLabel:'Database',  
    tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name={'ios-beer'}/>  
        </View>),
    barStyle: { backgroundColor: '#7933FF' }, 
  };

  // hander function for the TextInput Field
  // to set its value into the states
  setValue = (text) => {
    this.setState({value: text})
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{ flex: 1}}>
        <View style={{flex: 0.1}}>
          <NavBar  navigation={navigation}/>
        </View>
        {//  Create a Textinput field with a button that will send its value to the database
        }
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is the {navigation.state.routeName} screen</Text> 
          <View>
          {
            ['ios', 'android'].includes(Platform.OS) ? 
            <View><MetaInformationFields valueChange={(text) => { this.setValue(text) }} value={this.state.startValue}/>
            <Button title="INSERT" onPress={() =>this.onTap()}></Button>
            </View>: 
            <Text>SQLite not supported on your system</Text>
          }
          <Text>{Platform.OS} - [{Platform.Version}]</Text>
          </View>
        </View>
        <View>
        {//  Create a Flatlist from database entries
        }
        <FlatList
          data={this.state.databaseentries}
          renderItem={({item}) => <View><Text style="font-weight:900;">{item["id"]}</Text><Text>{item["test"]}</Text></View>}
        />
        </View>
      </View>
    );
  }
}