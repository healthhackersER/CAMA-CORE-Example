
import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Module} from '../Component/Module.component';

interface ModuleScreenProps extends React.Props<any> {
    navigation: any
}

export class ModuleScreen extends React.Component<ModuleScreenProps, any> {
    static navigationOptions = {
      title: 'Module Store',
      tabBarLabel:'Modules',  
      tabBarIcon: ({ tintColor }) => (  
          <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-apps'}/>  
          </View>),
      barStyle: { backgroundColor: '#4600EE' }, 
    };
    render() {
      return (
        <SafeAreaView style={styles.container}>
           <Module uri="https://play.google.com/store?gl=DE&utm_source=emea_Med&utm_medium=hasem&utm_content=Dec2019&utm_campaign=Evergreen&pcampaignid=MKT-DR-emea-de-1001280-Med-hasem-py-Evergreen-Dec2019-Text_Search_BKWS%7cONSEM_kwid_43700038455731697&gref=EkQKPAoICIDrr_EFEGESLACGsy4tVJsWIZuhfCXNtI-0jA_kSP52S1_wFdXfeM_d_YKl6Mk_u-R9Px5pGgKUIRAC8P8HARjj9tyaAw&gclid=CjwKCAiA66_xBRBhEiwAhrMuLVSbFiGboXwlzbSPtIwP5Ej-dktf8BXV33jP3f2CpejJP7vkfT8eaRoClCEQAvD_BwE&gclsrc=aw.ds"></Module>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });