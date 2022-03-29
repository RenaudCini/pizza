import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import ListPizza from './components/ListPizza';
import PizzaDetail from './components/PizzaDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./components/Login";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login}/>

        <Stack.Screen name='home'>
          {
            (props) => {
              return (
                <SafeAreaView style={styles.container} >
                  <ListPizza {...props} />
                </SafeAreaView>
              )
            }
          }
        </Stack.Screen>
        <Stack.Screen name="pizzaDetail" component={PizzaDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  volume: {
    width: 50,
    height: 50,
    backgroundColor: 'black'
  }
});
