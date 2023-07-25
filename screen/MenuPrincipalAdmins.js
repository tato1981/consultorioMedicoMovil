import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, ImageBackground } from 'react-native';



const MenuPrincipalAdmins = (props) => {



  return (
  
    <ImageBackground
    source={require('../src/img/imagen2.jpg')}
        style={styles.image}
    >

    <View style={styles.container}>
        

        <TouchableOpacity 
            //onPress={() => props.navigation.navigate('Create')}
            style={styles.boton} >
            <Text style={styles.textBoton} >Registro Usuario</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            //onPress={() => props.navigation.navigate('Create')}
            style={styles.boton} >
            <Text style={styles.textBoton} >Usuarios registrados</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            //onPress={() => props.navigation.navigate('Inicio-Sesión')}
            style={styles.boton}
            >
            <Text 
            style={styles.textBoton}             
            >Registro Medico</Text>            
        </TouchableOpacity> 

        <TouchableOpacity 
            //onPress={() => props.navigation.navigate('Create')}
            style={styles.boton} >
            <Text style={styles.textBoton} >Medicos Registrados</Text>
        </TouchableOpacity>

        
        <TouchableOpacity 
            onPress={() => props.navigation.navigate('Registro-Admins')}
            style={styles.boton}
            >
            <Text 
            style={styles.textBoton}             
            >Registro Admins</Text>            
        </TouchableOpacity> 

        <TouchableOpacity 
            onPress={() => props.navigation.navigate('Admins-Registrados')}
            style={styles.boton} >
            <Text style={styles.textBoton} >Admins Registrados</Text>
        </TouchableOpacity>

        
    </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#e8f6f395',
      alignItems: 'center',
      justifyContent: 'center',
      
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
    boton:{
        backgroundColor: '#A9F1F7',
        height: 35,
        borderColor: '#EF0AF7',
        borderWidth: 1,
        marginTop: 15,
        paddingHorizontal: 100,
        marginVertical: 30,        
        borderRadius: 10,        
    },
    textBoton: {        
        fontWeight: 'bold'
    }
  });

export default MenuPrincipalAdmins
