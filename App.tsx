import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DashboardComponent} from './Component/Dashboard.component'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <DashboardComponent name='Dashboard'></DashboardComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
