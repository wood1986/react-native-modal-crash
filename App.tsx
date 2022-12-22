/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CrashStack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
}

function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function CrashScreen() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  }, []);

  if (showModal) {
    return (
      <Modal>
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Crash screen</Text>
    </View>
  );
}

function Crash() {
  return (
    <CrashStack.Navigator>
      <CrashStack.Screen name="CrashScreen" component={CrashScreen} />
    </CrashStack.Navigator>
  );
}

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Crash" component={Crash} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
