import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

const LayoutList = ({ children }) => {
  return (

    <ImageBackground
      source={require("../src/img/imagen2.jpg")}
      style={styles.image}
    >

<View style={styles.container} >{children}</View>
      
    </ImageBackground>
  );
}
    
    const styles = StyleSheet.create({
        
        container: {
            flex: 1,
            backgroundColor: '#e8f6f395',
            //alignItems: 'center',
            paddingHorizontal: 15
    
          
        },
        image: {
            flex: 1,
            resizeMode: 'cover', // Ajusta la imagen para cubrir todo el fondo
          },
       
   
   

       
      });

export default LayoutList;
