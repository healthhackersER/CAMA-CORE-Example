import { createStore} from 'redux'
import {Platform} from 'react-native';
import {DBManager, Entry} from './DBManager';

export class StateModel {
  Status: Boolean;
  DB: DBManager;
  Error: string;
  Request: Promise<any>;
}

const defaultState:StateModel = {
  Status: true,
  Error: "",
  DB: null,
  Request: null
};


function SQLiteStore(state=defaultState, action) {
  try {
    if(state.DB == null) {
      state.DB = new DBManager('CaMa_data.db', 'Test');
    }
    switch(action.type) {
      case "INSERT":
       state.DB.insertNewEntry(action.value).then((results) => {
          return {...state,
            Request: this,
            Status: true
          }
        }, (err) => {
          return {...state,
            Status: false,
            Error: err.toString()
          }
        })

      default:
        return state;
    }
  } catch (err) {
    return {...state,
      Status: false,
      Error: err.toString()
    }
  }
  
}

export default createStore(SQLiteStore);