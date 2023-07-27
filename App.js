import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';


import InicioUsuarios from './screen/InicioUsuarios'
import InicioSesionAdamin from './screen/InicioSesionAdmin'
import MenuPrincipalAdmins from './screen/MenuPrincipalAdmins'
import RegistroAdmin from './screen/RegistroAdmin'
import AdminsRegistrados from './screen/AdminsRegistrados'


export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Inicio-Usuarios" component={InicioUsuarios} />

        <Stack.Screen name="Inicio-Sesión" component={InicioSesionAdamin} />

        <Stack.Screen
          name="Menu-Principal-Admins"
          component={MenuPrincipalAdmins}
        />

        <Stack.Screen
          name="Registro-Admins"
          component={RegistroAdmin}
          options={{
            title: "Agrega un Admin",
            headerStyle: { backgroundColor: "#dff9fa" },
            headerTitleStyle: { color: "black", fontSize: 15 },
          }}
        />

        <Stack.Screen
          name="Admins-Registrados"
          component={AdminsRegistrados}
          options={({ navigation }) => ({
            title: "Admins Registrados",
            headerStyle: { backgroundColor: "#dff9fa" },
            headerTitleStyle: { color: "black", fontSize: 15 },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Registro-Admins")}
              >
                <Text style={{ color: "black", marginRight: 20, fontSize: 15 }}>
                  Agregar
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
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
