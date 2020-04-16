import { createStore} from 'redux'
import {Platform} from 'react-native';
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

export class Entry {
  id: number;
  text: string
}

export class StateModel {
  Entries: Array<Entry>;
  Status: Boolean;
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
  db: {
    Table: 'Test',
    Name: 'CaMa_data.sqlite',
    Status: false,
    Error: ''
  }
};

class DBManager {
  db: any;
  constructor(db_name, table_name) {
    if(this.isSQLiteAvailable){
      this.db = this.openDB(db_name);
      this.createTable(table_name)
    } else {
      throw new Error("SQLite is not available on your system!")
    }
  }

  isSQLiteAvailable(){
    return false;//['ios', 'android'].includes(Platform.OS);
  }
  openDB(db_name) {
    if(SQLite){
      db = SQLite.openDatabase(db_name);
    }
  }

  async createTable(table_name) {
    db.transaction(tx => {
      tx.executeSql(`drop table if exists ${table_name};`);
    });
    db.transaction(tx => {
      tx.executeSql(`create table if not exists ${table_name} (id integer primary key not null, test text);`);
    });
  }

  async insertEntry(entry: Entry, table_name: String) {
    let state = defaultState;
    this.db.transaction( tx => {
        // Add a new entry with higher ID and Value that was inserted in TextField
        tx.executeSql(`insert into ${table_name} (id, test) values (?, ?)`, [entry.id, entry.text], false, (_, error) => console.log(error.message));
    }); 
    return this.getEntries(table_name)
  }

  async getEntries(table_name) {
    let entries = [];
    this.db.transaction( tx => {
      tx.executeSql(`select * from ${table_name}`, [], (_, { rows }) => {
        entries = rows._array;
      }, (_, error) => console.log(error.message));
    });
    return entries;
  }
}

function SQLiteStore(state=defaultState, action) {
  let dbManager: DBManager = null
  try {
    dbManager = new DBManager(state.db.Name, state.db.Table);
    state.db.Status = true;

    switch(action.type) {
      case "INSERT":
        const entries = dbManager.insertEntry(action.value.Entry, state.db.Table);
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