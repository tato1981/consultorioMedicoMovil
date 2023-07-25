import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, TextInput, Button, Pressable, ImageBackground } from 'react-native';



import { adminLogin } from '../api';


const InicioSesionAdmin = ({navigation, }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const data = await adminLogin();
    if (data ) {
      Alert.alert(
        "Bienvenido",
        "Bienvenido al sistema de gestión de usuarios",
        [
          {
            text: "Aceptar",
            onPress: () => navigation.navigate("Menu-Principal-Admins"),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <ImageBackground
      source={require("../src/img/imagen2.jpg")}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Inicio Sesión</Text>

        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
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
