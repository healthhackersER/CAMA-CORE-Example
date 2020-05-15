import { createStore} from 'redux'
import {Platform} from 'react-native';
import * as SQLite from "expo-sqlite";

export class Entry {
  id: number;
  value: string;
  type: string;
  constructor(id: number, value: string){
    this.id = id;
    this.value = value;
    this.type = Entry.constructor.name
  }
}

class SQLiteInterface {
  db: any;
  db_name: string;
  constructor(db_name) {
    if(this.isSQLiteAvailable){
      this.db_name = db_name;
    } else {
      throw new Error("SQLite is not available on your system!")
    }
  }
  isSQLiteAvailable(){
    return ['ios', 'android'].includes(Platform.OS);
  }
  openDB() {
    if(SQLite){
      try {
        this.db = SQLite.openDatabase(this.db_name);
        return this.db;
      } catch (e) {
        console.error(`Unable to open database ${this.db_name} - ${e.message}`);
      }
    }
    return null;
  }
   
  async transaction(query: string, param: any){
    const db = this.db ? this.db : this.openDB();
    return new Promise((resolve, reject) => {
        let result: SQLResultSet = null;
        this.db.transaction(tx => {
            tx.executeSql(query, param, (_, results) => {
              console.log(JSON.stringify(results));
              result = results;
            });
        }, (e) => {
          console.error(`ERROR [${query}]: ${e.message}`);
          reject(e);
        }, () => {
          console.log(`SUCCESS [${query}]`);
          resolve(result);
        })
      });
  }
}

class DBManager  extends SQLiteInterface {
  table = ""
  entries = []
  constructor(db_name, table) { 
    super(db_name) ;
    this.table = table;
    this.createTable()
    .then(() => this.getEntries())
    .catch(error => console.log(error))
  }

  async createTable() {
    return this.transaction(`CREATE TABLE IF NOT EXISTS ${this.table} (id INTEGER PRIMARY KEY NOT NULL, value TEXT, type TEXT)`, []);
  }

  async dropTable() {
    return this.transaction(`DROP TABLE IF NOT EXISTS ${this.table}`, []);
  }

  async insertNewEntry(entry: Entry) {
      return this.transaction(`INSERT INTO ${this.table} (value, type) VALUES (?, ?)`, [entry.value, entry.type])
      .then((results) => {
        console.log(`insertNewEntry [${JSON.stringify(results)}]`)
        this.getEntry(results.insertId).then((entry: Entry) => {
          this.entries.push(entry);
        });
      })
  }
  async getEntry(id: number) {
    return this.transaction(`SELECT * FROM ${this.table} WHERE id=${id}`, [])
    .then((resultSet) => {
      console.log(`getEntries [${JSON.stringify(resultSet)}]`)
      return new Entry(-1, "");
    })
  }
  async getEntries() {
    return this.transaction(`SELECT * FROM ${this.table}`, [])
    .then((resultSet) => {
      const entries = resultSet.rows._array;
      console.log(`getEntries [${JSON.stringify(resultSet)}]`)
      this.entries = entries.map(x => {return new Entry(x.id, x.value)});
    })
  }
}

export class StateModel {
  Entries: Array<Entry>;
  Status: Boolean;
  Request: Promise<StateModel>;
  DB: DBManager;
  db: {
    Name: string;
    Table: string;
    Status: boolean;
    Error: String;
  }
}

const defaultState:StateModel = {
  Entries: new Array<Entry>(),
  Status: true,
  DB: null,
  Request: null,
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
    if(state.DB == null) {
      state.DB = new DBManager('CaMa_data.db', 'Test');
    }
    switch(action.type) {
      case "INSERT":
       state.DB.insertNewEntry(action.value).then((results) => {
          return {...state,
            Request: this,
            Status: true,
            EntryNew: null
          }
        }, (error) => {
          state.db.Error = error;
          return {...state}
        })

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