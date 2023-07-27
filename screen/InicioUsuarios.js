import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, ImageBackground } from 'react-native';


const InicioUsuarios = (props) => {


  return (
  
    <ImageBackground
        source={require('../src/img/imagen2.jpg')}
        style={styles.image}
    >
      

    <View style={styles.container}>
    <Text style={styles.titulo}>Consultorio {''}
        <Text style={styles.tituloBold}>Medico</Text>
      </Text>
        

        <TouchableOpacity 
            //onPress={() => props.navigation.navigate('Create')}
            style={styles.boton} >
            <Text style={styles.textBoton} >Usuario</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            //onPress={() => props.navigation.navigate('Create')}
            style={styles.boton} >
            <Text style={styles.textBoton} >Medico</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => props.navigation.navigate('Inicio-Sesión')}
            style={styles.boton}
            >
            <Text 
            style={styles.textBoton}             
            >Admin</Text>
            
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
      height: 400,
      
    
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
        marginTop: 35,
        paddingHorizontal: 100,
        marginVertical: 30,        
        borderRadius: 10,        
    },
    textBoton: {        
        fontWeight: 'bold'
    },
    titulo: {
      textAlign: 'center',
      fontSize: 20,
      color: '#374151',
      fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  });

export default InicioUsuarios
