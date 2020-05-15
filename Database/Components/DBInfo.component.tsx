import React, {Component} from 'react';
import {View , Platform} from 'react-native';
import { Text} from 'react-native-elements';
import {DBManager} from '../Store/DBManager'

interface DBProps extends React.Props<any> {
    db: DBManager
}

export class DBInfo extends Component<DBProps, any> {
    constructor(props) {
        super(props)
    }
   
    render() {
        /** Success Element with Green Icon */
        if(this.props.db.isOnline()){
            return <View style={{flex: 0.7, alignItems:"stretch", justifyContent:"flex-end"}}>
                <Text h3>Platform</Text>
                <Text>{`${Platform.OS} - [${Platform.Version}]`}</Text>
                <Text h3>DB State</Text>
                <Text>{JSON.stringify(this.props.db)}</Text>
            </View>
        } 
        /** Error Element with Red Icon and Error Message */
        else {
            return <View style={{flex: 0.7, alignItems:"stretch", justifyContent:"flex-end"}}>
                <Text>SQLite not supported on your system</Text>
                <Text h3>Platform</Text>
                <Text>{`${Platform.OS} - [${Platform.Version}]`}</Text>
                <Text h3>DB State</Text>
                <Text>{JSON.stringify(this.props.db)}</Text>
            </View>
        }
    }
}