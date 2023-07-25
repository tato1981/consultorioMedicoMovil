
import React, { useState, useEffect } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,  
    TextInput,
    Button,
    Alert,
    ScrollView,
    TouchableOpacity ,
    ImageBackground
    } from 'react-native';


import { createAdmin, getAdmin, updateAdmin } from '../api';


const RegistroAdmin = ({navigation, route}) => {
  const [admin, setAdmin] = useState({
    nombre: "",
    apellidos: "",
    documento: "",
    email: "",
    telefono: "",
    password: "",
    repetir_password: "",
  });

  const [editing, setEditing] = useState(false);

  const handleChangeText = (name, value) =>
    setAdmin({ ...admin, [name]: value });

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await createAdmin(admin);
        Alert.alert("Alerta", "El admin se registró correctamente");
      } else {
        await updateAdmin(route.params.id, admin);
        Alert.alert("Alerta", "El admin se actualizó correctamente");
      }
      navigation.navigate("Admins-Registrados");
    } catch (error) {
      console.error(error);
    }

    // if (admin.password !== admin.repetir_password) {
    //     Alert.alert('Las contraseñas no coinciden')
    //     if(nombre === ''||apellidos === ''|| documento === ''|| email === '' || email === ''|| password === ''|| repetir_password === '') {
    //         Alert.alert('Llene todos los campos')
    // } else {
    //      saveAdmin(admin)
    //      navigation.navigate('Admins-Registrados')
    //  }
    // }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({
        headerTitle: "Actualizar Admin",
      });

      setEditing(true);

      (async () => {
        const admin = await getAdmin(route.params.id);

        setAdmin({
          nombre: admin.nombre,
          apellidos: admin.apellidos,
          documento: admin.documento,
          email: admin.email,
          telefono: admin.telefono,
          password: admin.password,
          repetir_password: admin.repetir_password,
        });
      })();
    }
  }, []);

  return (
    <ImageBackground
      source={require("../src/img/imagen2.jpg")}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Nombre</Text>
        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Nombre"
            onChangeText={(text) => handleChangeText("nombre", text)}
            value={admin.nombre}
          />
        </View>

        <Text style={styles.label}>Apellidos</Text>
        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Apellidos"
            onChangeText={(text) => handleChangeText("apellidos", text)}
            value={admin.apellidos}
          />
        </View>
        <Text style={styles.label}>Documento</Text>
        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Documento"
            keyboardType="numeric"
            onChangeText={(text) => handleChangeText("documento", text)}
            value={admin.documento.toString()}
          />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => handleChangeText("email", text)}
            value={admin.email}
          />
        </View>

        <Text style={styles.label}>Teléfono</Text>
        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Teléfono"
            keyboardType="numeric"
            onChangeText={(text) => handleChangeText("telefono", text)}
            value={admin.telefono}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputgroup}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => handleChangeText("password", text)}
            value={admin.password}
          />
        </View>

        <Text style={styles.label}>Repetir Password</Text>
        <View style={styles.inputgroup}>
          <TextInput
            secureTextEntry={true}
            placeholder="Repetir Password"
            onChangeText={(text) => handleChangeText("repetir_password", text)}
            value={admin.repetir_password}
          />
        </View>

        {!editing ? (
          <View>
            <Button title="Registrar" onPress={handleSubmit} />
          </View>
        ) : (
          <View>
            <Button title="Actualizar" onPress={handleSubmit} />
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}
  
  const styles = StyleSheet.create({
      
      container: {
          flex: 1,
          backgroundColor: '#e8f6f398',
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
      borderBottomColor: 'black'

  },
  label: {
    fontWeight: 'bold'

  }
     
    });


export default RegistroAdmin
