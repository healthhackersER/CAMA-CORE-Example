import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from 'expo-camera';

interface CameraScreenProps extends React.Props<any> {
    navigation: any
}

export class CameraScreen extends React.Component<CameraScreenProps, any> {
    static navigationOptions = {
      title: 'Camera Screen',
      tabBarLabel:'Camera',  
      tabBarIcon: ({ tintColor }) => (  
          <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-camera'}/>  
          </View>),
      barStyle: { backgroundColor: '#4622EE' }, 
    };
    render() {
        const [hasPermission, setHasPermission] = useState(null);
        const [type, setType] = useState(Camera.Constants.Type.back);

        useEffect(() => {
            (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            })();
        }, []);

      const navigation = this.props.navigation;
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
      return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type}>
                <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    }}
                    onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                    }}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
                </View>
            </Camera>
        </View>
      );
    }
  }