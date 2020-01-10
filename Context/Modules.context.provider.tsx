import React, {Component} from 'react';
import { AppbarContent } from 'react-native-paper/lib/typescript/src/components/Appbar/AppbarContent';

;

const ModuleContext = React.createContext();

export class ModuleProvider extends Component {
    state = {
        number: 10,
        inc: () => {
            this.setState({number: this.state.number + 1});
        }
    };
    render () {
        return <ModuleContext.Provider value={this.state}>
            {this.props.children}
        </ModuleContext.Provider>
    };
}
const Green = () => (
    <div className="green" style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ModuleContext.Consumer>
            {(context) => context.number}
        </ModuleContext.Consumer>
    </div>    
);

const Blue = () => (
    <div className="blue" style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ModuleContext.Consumer>
            {(context) => <button onClick={context.inc}>INC</button>}
        </ModuleContext.Consumer>
        <Green />
    </div>
);

export class Red extends Component {
    render() {
      return  <ModuleProvider> 
          <div className="red" style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ModuleContext.Consumer>
              {(context) => context.number}
            </ModuleContext.Consumer>
            <Blue />
          </div>
      </ModuleProvider>
    }
}