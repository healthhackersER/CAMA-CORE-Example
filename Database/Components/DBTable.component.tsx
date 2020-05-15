import React, {Component} from 'react';
import {StyleSheet, View, ScrollView } from 'react-native';
import { Icon, Text} from 'react-native-elements';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import {DBStatus} from './DBStatus.component'
import {Entry, DBManager} from '../Store/DBManager'

interface DBTableProps extends React.Props<any> {
    db: DBManager;
}

export class DBTable extends Component<DBTableProps, any> {
    state = {
        tableHead: [],
        tableLabel: [],
        widthArr: []
    }
    constructor(props) {
        super(props)

        function getWidth(TYPE: string){
            switch(TYPE){
                case "INTEGER": return 60;
                case "TEXT": return 250;
                default: return 100;
            }
                

        }
        const cols = Entry.getFields();
        this.state.tableHead =  cols.map(x => x[0]);
        this.state.widthArr = cols.map(x => getWidth(x[1]))
        this.state.tableLabel = cols.map(x => x[2])
    }

    render() {
        const state = this.state;
        const entries = this.props.db.entries;
        const tableData = entries.map(entry => {
            return this.state.tableHead.map(key => entry[key])
        });

        return <View style={styles.container}>
        <View>
            <DBStatus db={this.props.db}></DBStatus>
        </View>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableLabel} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
  });