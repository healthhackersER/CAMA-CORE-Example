
import React from 'react';
import {View, Text, Platform} from 'react-native';
import { Input, Button, Icon} from 'react-native-elements';
import store from './Store/SQLiteStore'
import {DBStatus} from './Components/DBStatus.component'
import {DBInfo} from './Components/DBStatusInfo.component'

interface DatabaseScreenProps extends React.Props<any> {
    navigation: any
    textValue: string
}

export class DatabaseScreen extends React.Component<DatabaseScreenProps, any> {
  NewEntry: {id: number, text: string}
  constructor(props) { 
    super(props);
    this.state = store.getState();
      store.subscribe(() => {
      this.setState(store.getState());
    });
    this.NewEntry = {id: -1, text: ''};
  }

  insertEntry = async (entry) => {
    store.dispatch({
      type: "INSERT",
      value: {Entry: entry}
    })
  };
  
  static navigationOptions = {  
    title: 'Database Screen',
    tabBarLabel:'Database',  
    tabBarIcon: ({ tintColor }) => (  
        <View>
            <Icon type='font-awesome' name='database' style={{color: 'tintColor'}}/>  
        </View>),
    barStyle: { backgroundColor: '#7933FF' }, 
  };

  render() {
    console.log(JSON.stringify(this.state))
    const navigation = this.props.navigation;

    return (
      <View style={{ flex: 1, padding:10}}>
        <DBStatus db_stats={this.state.db}/>
        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
          <Input
                  label='New Entry'
                  placeholder={"Input text of new datase entry"} 
                  onChangeText={text => this.NewEntry = {id: -1, text: text}}
          />
          <View style={{ flex:0.2, width:'100%', padding:10}}>
            <Button title="INSERT" onPress={() =>this.insertEntry(this.NewEntry)}></Button>
          </View>
        </View>
        
        <View style={{flex: 0.7, alignItems:"stretch", justifyContent:"flex-end"}}>
          <DBInfo db_state={this.state}/>
        </View>
      </View>
    );
  }
}