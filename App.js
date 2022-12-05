import { StatusBar } from 'expo-status-bar';
import Inicial from "./src/pages/Inicial/index"
import Perfil from "./src/pages/perfil/index"
import Filas from "./src/pages/filas/index"
import Calendario from "./src/pages/calendario/index"
import { NavigationContainer } from '@react-navigation/native';
import Menu from "./src/pages/Menu/index"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicial">
      <Stack.Screen 
        name="inicial" 
        component={Inicial} 
        options={{title:"tela Inicial"}}
        />

        <Stack.Screen 
        name="perfil" 
        component={Perfil} 
        options={{title:"tela Perfil"}}
        />
        <Stack.Screen 
        name="menu" 
        component={Menu} 
        options={{title:"Menu"}}
        />
        <Stack.Screen 
        name="filas" 
        component={Filas} 
        options={{title:"Filas"}}
        />
        <Stack.Screen 
        name="calendario" 
        component={Calendario} 
        options={{title:"calendario"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}