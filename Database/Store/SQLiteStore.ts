import { createStore} from 'redux'
import {Platform} from 'react-native';
import * as SQLite from "expo-sqlite";

export class Entry {
  id: number;
  value: string
}

class DBManager {
  db: any;
  tables = [];
  constructor(db_name) {
    if(this.isSQLiteAvailable){
      this.db = this.openDB(db_name);
    } else {
      throw new Error("SQLite is not available on your system!")
    }
  }

  isSQLiteAvailable(){
    return ['ios', 'android'].includes(Platform.OS);
  }
  openDB(db_name) {
    if(SQLite){
      try {
        this.db = SQLite.openDatabase(db_name);
        this.getTables();
      } catch (e) {
        console.error(`Unable to open database ${db_name} - ${e.message}`);
      }
    }
  }
  async getTables() {
    return this.db.transaction(tx => {
      tx.executeSql("select * from sys.Tables", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.tables = temp;
        console.log(JSON.stringify(temp));
      });
    }, (e) => {
      console.error(`Get TABLES ERROR: ${e.message}`);
    }, (success) => {
      console.log("Get TABLES SUCCESS");
    });
  }
  async createTable(table_name) {
    try {
      return this.db.transaction(tx => {
        tx.executeSql(`create table if not exists ? (id integer primary key not null, value text);`, [table_name])
        tx.executeSql('select * from sys.Tables', [], (_, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          this.tables = temp;
          console.log(JSON.stringify(temp));
        });
      }, (_, e) => {
        console.error(`ERROR creating table: ${e.message}`);
      }, (ResultSet) => {
        console.log(`Table created SUCCESS ${JSON.stringify(ResultSet)}`);
      }
      );
    } catch (e) {
      console.error(`Unable to create table ${table_name} - ${e.message}`);
    }
  }

  async insertEntry(entry: Entry, table_name: String) {
      return this.db.transaction( tx => {
        // Add a new entry with higher ID and Value that was inserted in TextField
        tx.executeSql(`insert into ${table_name} (id, value) values (?, ?)`, [entry.id, entry.value])
        tx.executeSql(`select * from ${table_name}`, [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      }, (_, error) => console.error(error.message),
      ()=> console.log("Insert Entry SUCCESS")); 
  }

  async getEntries(table_name) {
    let entries = [];
    this.db.transaction( tx => {
      tx.executeSql(`select * from ${table_name}`, [], 
      (_, { rows }) => {
        entries = rows._array;
      }, (_, error) => console.log(error.message));
    });
    return entries;
  }
}

export class StateModel {
  Entries: Array<Entry>;
  Status: Boolean;
  DB: DBManager;
  db: {
    Name: string;
    Table: string;
    Status: boolean;
    Error: String;
  }
}

const defaultState:StateModel = {
  Entries: new Array<Entry>() ,
  Status: true,
  DB: new DBManager('CaMa_data.db'),
  db: {
    Table: 'Test',
    Name: 'CaMa_data.db',
    Status: false,
    Error: ''
  }
};



function SQLiteStore(state=defaultState, action) {
  try {
    state.db.Status = true;
    if(state.DB) {
      state.DB.openDB(state.db.Name);
      state.DB.createTable(state.db.Table);
    }
    switch(action.type) {
      case "INSERT":
        const entries = state.DB.insertEntry(action.value.Entry, state.db.Table);
        return {...state,
          Entries : entries,
          Status: true,
          EntryNew: null
        }
      default:
        return state;
    }
  } catch (err) {
    return {...state,
      Status: false,
      db: {...state.db,
        Status: false,
        Error: err.toString()
      }
    }
  }
  
}

export default createStore(SQLiteStore);