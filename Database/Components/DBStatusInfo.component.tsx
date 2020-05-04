import React, {Component} from 'react';
import {View , Platform} from 'react-native';
import { Text} from 'react-native-elements';

interface DBInfoProps extends React.Props<any> {
    db_state: any
}

export class DBInfo extends Component<DBInfoProps, any> {
    constructor(props) {
        super(props)
    }
   
    render() {
        /** Success Element with Green Icon */
        if(this.props.db_state.db.Status){
            return <View style={{flex: 0.7, alignItems:"stretch", justifyContent:"flex-end"}}>
                <Text>{`${Platform.OS} - [${Platform.Version}]`}</Text>
                <Text>{JSON.stringify(this.state)}</Text>
            </View>
        } 
        /** Error Element with Red Icon and Error Message */
        else {
            return <View style={{flex: 0.7, alignItems:"stretch", justifyContent:"flex-end"}}>
                <Text>SQLite not supported on your system</Text>
                <Text>{`${Platform.OS} - [${Platform.Version}]`}</Text>
                <Text>{JSON.stringify(this.props.db_state)}</Text>
            </View>
        }
    }
}