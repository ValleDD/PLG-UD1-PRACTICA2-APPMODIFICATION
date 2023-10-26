import React from "react";
import {StyleSheet, Text, ScrollView, Image, View } from 'react-native'

const AboutMe = () => {
  return (
    <View style={styles.body}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.avatar}
            source={require("./../assets/SofyanAmrabat.jpg")}
          ></Image>
          <View
            style={{
              margin: 10,
              backgroundColor: "lightgray",
              padding: 10,
              borderRadius: 10,
              width: "70%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 20,
              }}
            >
              Descripción sobre mí!
            </Text>
            <Text>
              Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "black",
            fontWeight: "900",
            textTransform: "capitalize",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          cosas que me gustan mucho:
        </Text>
        <ScrollView style={{ ...{ padding: 10 }, ...styles.thinsILikeALot }}>
          <Text>Salir a pasear</Text>
          <Text>Senderismo</Text>
          <Text>Ir a la playita</Text>
          <Text>Domingos de misa</Text>
          <Text>La guitarrita</Text>
          <Text>El monte con lluvia</Text>
          <Text>Viajar</Text>
          <Text>Música variadita</Text>
          <Text>Anime</Text>
          <Text>Ducharme</Text>
          <Text>Videojuegos</Text>
          <Text>Ir de cenar romántica</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   
    body: {
      width: "100%",
      borderWidth: 2,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 9,
    },
    avatar: {
      height: 90,
      width: 90,
      borderRadius: 100,
    },
    thinsILikeALot: {
      borderColor: "black",
      borderWidth: 1,
      borderStyle: "dashed",
      padding: 20,
      color: "darkred",
      textAlign: "center",
      fontWeight: "bold",
      fontStyle: "italic",
      fontSize: 16,
      backgroundColor: "silver",
    },
    
  });
export default AboutMe;
