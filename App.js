import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EsqueciaSenha from './src/pages/EsqueciaSenha';
import PaginaLogin from './src/pages/PaginaLogin';
import PaginaRegistro from './src/pages/PaginaRegistro';
import Home from './src/pages/Home';
import EmailEnviado from './src/pages/EmailEnviado';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='PaginaLogin' component={PaginaLogin}/>
        <Stack.Screen name='PaginaRegistro' component={PaginaRegistro}/>
        <Stack.Screen name='EsqueciaSenha' component={EsqueciaSenha}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='EmailEnviado' component={EmailEnviado}/>
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
