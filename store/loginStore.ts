import { createStore} from 'redux'

const defaultState = {
  email: "test@gmail.com",
  password: "test123",
  loginSuccess: false,
};

function chatStore(state=defaultState, action) {
  switch(action.type) {
    case "LOGIN":
      return {...state,
          email: action.value.email, 
          loginSuccess: true,
        };
    case "LOGOUT":
        return {...state,
            loginSuccess: false,
        };
    default:
      return state;
  }
}

export default createStore(chatStore);