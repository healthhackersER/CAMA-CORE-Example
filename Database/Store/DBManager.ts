import { SQLiteInterface } from './SQLiteInterface'

export class Entry {
    id: number;
    value: string;
    type: string;
    constructor(id: number, value: string){
      this.id = id;
      this.value = value;
      this.type = this.constructor.name
    }
    static getFields() {
        return [["id", "INTEGER", "ID"], ["value", "TEXT", "Value"], ["type", "TEXT", "Value Type"]];
    }
  }

export class DBManager  extends SQLiteInterface {
    table: string = ""
    entries: Array<Entry>  = []
    constructor(db_name, table) { 
      super(db_name) ;
      this.table = table;
      this.createTable()
      .then(() => this.getEntries())
      .catch(error => console.log(error))


    }

    isOnline() {
        return this.db ? true: false;
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
          console.log(`insertNewEntry [${JSON.stringify(results)}]`);
          this.getEntry(results.insertId).then((entry: Entry) => {
            this.entries.push(entry);
          });
        })
    }

    async getEntry(id: number) {
      return this.transaction(`SELECT * FROM ${this.table} WHERE id=${id}`, [])
      .then((resultSet) => {
        const entry: Entry = resultSet.rows._array[0];
        console.log(`getEntry(${id}) [${JSON.stringify(resultSet)}]`)
        return entry;
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