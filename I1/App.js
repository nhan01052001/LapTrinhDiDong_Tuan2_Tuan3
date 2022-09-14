import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SC_Home from './screens/SC_Home';
import SC_InChu from './screens/SC_InChu';
import SC_TinhTong from './screens/SC_TinhTong';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SC_Home' component={SC_Home} />
        <Stack.Screen name='SC_InChu' component={SC_InChu} />
        <Stack.Screen name='SC_TinhTong' component={SC_TinhTong} />
      </Stack.Navigator>
    </NavigationContainer>
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
