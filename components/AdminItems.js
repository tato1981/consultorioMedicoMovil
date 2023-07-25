import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AdminItem = ({admin, handleDelete}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.itemContainer} >

    <TouchableOpacity
        onPress={() => navigation.navigate('Registro-Admins', {id: admin.id})}
    >
      <Text style={styles.itemTextos} >{admin.nombre}</Text>
      <Text style={styles.itemTextos} >{admin.apellidos}</Text>
      <Text style={styles.itemTextos} >{admin.documento}</Text>
      <Text style={styles.itemTextos} >{admin.email}</Text>
      <Text style={styles.itemTextos} >{admin.telefono}</Text>
    </TouchableOpacity>
      
    <TouchableOpacity   style={{
        backgroundColor: '#ee5253',
        padding: 7,
        borderRadius: 5,
        
        }}  >
      <Text 
          style={{color: "#fff"}}  
          onPress={() => handleDelete(admin.id)}
          >Eliminar</Text>
    
    </TouchableOpacity>  
    
  </View>
)
}

const styles = StyleSheet.create({
  itemContainer: {
      backgroundColor: '#e8f6f370',
      padding: 20,
      marginVertical: 8,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent:'space-between', 
      alignItems: 'center', 
  },
  itemTextos: {
      color: 'black',
      fontSize: 15
  }
})

    

export default AdminItem