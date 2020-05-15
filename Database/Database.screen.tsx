
import React from 'react';
import {View, Text, Platform} from 'react-native';
import { Input, Button, Icon} from 'react-native-elements';
import store from './Store/DBStore'
import {Entry} from './Store/DBManager'
import {DBStatus} from './Components/DBStatus.component'
import {DBInfo} from './Components/DBInfo.component'
import {DBTable} from './Components/DBTable.component'

interface DatabaseScreenProps extends React.Props<any> {
    navigation: any
    textValue: string
}

export class DatabaseScreen extends React.Component<DatabaseScreenProps, any> {
  NewEntry: Entry;
  constructor(props) { 
    super(props);
    this.state = store.getState();
      store.subscribe(() => {
      this.setState(store.getState());
    });
    this.NewEntry = new Entry(-1, '');
  }

  insertEntry = async (entry: Entry) => {
    store.dispatch({
      type: "INSERT",
      value: entry
    })
  };

  deleteEntry = async(id: number) => {
    store.dispatch({
      type: "DELETE",
      value: id
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
    const navigation = this.props.navigation;

    return (
      <View style={{ flex: 1, padding:10}}>
        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
          <Input
                  label='New Entry'
                  placeholder={"Input text for new entry"} 
                  onChangeText={text => this.NewEntry = new Entry(-1, text)}
          />
          <View style={{ flex:0.2, width:'100%', padding:10}}>
            <Button title="INSERT" onPress={() =>this.insertEntry(this.NewEntry)}></Button>
          </View>
        </View>
        <View style={{flex: 0.8, alignItems:"stretch"}}>
          <DBTable db={this.state.DB}></DBTable>
        </View>
      </View>
    );
  }
}