import React, {Component} from 'react';
import {View } from 'react-native';
import { Icon, Text} from 'react-native-elements';

interface DBStatusProps extends React.Props<any> {
    db_stats: {
        Name: string;
        Table: string;
        Status: boolean;
        Error: String;
    }
}

export class DBStatus extends Component<DBStatusProps, any> {
    constructor(props) {
        super(props)
    }

    render() {
        /** Success Element with Green Icon */
        if(this.props.db_stats.Status){
            return <View>DB Status: <Icon type='font-awesome' name='database' color='green'/> Online</View>;
        } 
        /** Error Element with Red Icon and Error Message */
        else {
            return <View style={{width:'100%'}}>
                <Text>DB Status: <Icon type='font-awesome' name='database' color='red'></Icon> Offline</Text>
            </View>
        }
    }
}