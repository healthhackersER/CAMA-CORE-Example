import * as SQLite from "expo-sqlite";

  
export class SQLiteInterface {
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