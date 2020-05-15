import React, {Component} from 'react';
import {View } from 'react-native';
import { Icon, Text} from 'react-native-elements';
import {DBManager} from '../Store/DBManager'

interface DBProps extends React.Props<any> {
    db: DBManager
}

export class DBStatus extends Component<DBProps, any> {
    constructor(props) {
        super(props)
    }

    render() {
        /** Success Element with Green Icon */
        if(this.props.db.isOnline()){
            return <View style={{flexDirection:'row', paddingHorizontal: 10, alignItems: "center"}}>
                <Icon type='font-awesome' name='database' color='green'/>
                <Text> Online</Text>
            </View>;
        } 
        /** Error Element with Red Icon and Error Message */
        else {
            return <View style={{flexDirection:'row', paddingHorizontal: 10, alignItems: "center"}}>
                <Icon type='font-awesome' name='database' color='red'></Icon>
                <Text> Offline</Text>
            </View>
        }
    }
}