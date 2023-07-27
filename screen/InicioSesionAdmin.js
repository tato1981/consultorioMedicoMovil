import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, TextInput, Button, Pressable, ImageBackground } from 'react-native';



import { adminLogin } from '../api';


const InicioSesionAdmin = ({navigation, }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    
    
   try {
      
      const admins = await adminLogin();
  
      // Recorrer cada usuario y extraer los datos
      admins.forEach((admin) => {
        const { email, password,  } = admin;
        console.log(`Su email es: ${email}, Su Password: ${password}`);             
       

       if(admin && admin.password === password){ 

          // Las credenciales son válidas, puedes realizar las acciones necesarias (por ejemplo, redirigir a otra pantalla).
         console.log('¡Credenciales válidas! Acceso concedido.');
          Alert.alert(
              "Bienvenido",
              "Bienvenido al sistema de gestión de administradores",
              [
                {
                  text: "Aceptar",
                  onPress: () => navigation.navigate("Menu-Principal-Admins"),
                },
              ],
              { cancelable: false }
            );
          
      }else{
          // Las credenciales no son válidas.
          console.log('¡Credenciales no válidas! Intenta nuevamente.');
          Alert.alert(
              "Credenciales no válidas",
              "Intenta nuevamente",
              [
                {
                  text: "Aceptar",
                  onPress: () => navigation.navigate("InicioSesionAdmin"),
                },
              ],
              { cancelable: false }


            );

      }



      });
    } catch (error) {
      console.error('Error al obtener los usuarios:', error.message);
    }  
  }

  return (
    <ImageBackground
      source={require("../src/img/imagen2.jpg")}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Inicio Sesión Admins</Text>

        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <View>
          <Button
            title="Ingresar"
            //onPress={() => props.navigation.navigate('Menu-Principal-Admins')}
            onPress={handleSubmit}
          />
        </View>

        <Pressable style={styles.olvidePassword}>
          <Text style={styles.textOlvidePassword}>Recuperar Password?</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
}
    
    const styles = StyleSheet.create({
        
        container: {
            flex: 1,
            backgroundColor: '#e8f6f395',
            //alignItems: 'center',
            padding: 30
    
          
        },
        image: {
            flex: 1,
            resizeMode: 'cover', // Ajusta la imagen para cubrir todo el fondo
          },
        texto: {
            fontSize: 20,       
            fontWeight: 'bold',
            textTransform: 'uppercase'     
    
        },
    titulo: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 12,
        marginBottom: 20
    },
    inputgroup: {
        flex: 1,
        padding: 0,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'

    },
    olvidePassword: {
        padding:15
    },
    textOlvidePassword: {
        color: '#1009e1',
        textAlign: 'right'
    },

       
      });

export default InicioSesionAdmin