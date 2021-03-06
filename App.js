import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Root = createStackNavigator()

const Screen1 = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 1</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.push('Screen2')
      }}
    />
  </View>
)

const Screen2 = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 2</Text>

    <Button 
    title="Go to Screen 3"
    m-15
    onPress={() => {
      navigation.push('Screen3')
    }}/>

    <Button 
    title="Go back"
    onPress={() => {
      navigation.pop()
    }}/>
  </View>
)

const Screen3 = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 3</Text>
    <Button
    title="Go to Screen2"
    onPress={() => {
      navigation.pop()
    }}/>
  </View>
)

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Screen1" component={Screen1} />
        <Root.Screen name="Screen2" component={Screen2}/>
        <Root.Screen name="Screen3" component={Screen3}/>
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center'
  },
  title: {
    padding: 20,
    fontSize: 42
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
