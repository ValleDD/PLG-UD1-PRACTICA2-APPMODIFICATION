import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.firsttoprowContainer}>My Portfolio App</Text>
        <View style={styles.rowTopSecondContainer}>
        <Pressable style={styles.buttonruta} onPress={() => setDisplayMyQR(true)}>
          <Text style={{...{color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}, ...styles.shadoxboxing}}>Mi info</Text>
        </Pressable>
        <Button onPress={() => setDisplayMyQR(false)} title="Mi Repo" color="light-gray" accessibilityLabel='Un botón pal QR' />
        </View>
      </View>
      {
        displayMyQR ?
          <View style={styles.bodystails}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={styles.avatar} source={require('./assets/SofyanAmrabat.jpg')}></Image>
              <View style={{margin: 10, backgroundColor: 'lightgray', padding: 10, borderRadius: 10, width: '70%'}}>
            <Text style={{textAlign:'center', fontWeight: '700', fontSize: 20}}>
            Descripción sobre mí!
            </Text>
            <Text>
              Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos
            </Text>
              </View>
              </View>
            <Text style= {{color: 'beriblak', fontWeight: "900", textTransform: 'capitalize', fontSize: 20, textAlign: 'center'}}>
              cosas que me gustan mucho:
            </Text>
            <ScrollView style={{padding: 10}}>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Salir a pasear</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Senderismo</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Ir a la playita</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Domingos de misa</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>La guitarrita</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>El monte con lluvia</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Viajar</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Música variadita</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Anime</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Ducharme</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Videojuegos</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Ir de cenar romántica</Text>
            </ScrollView>
            </View>
          </View>
          :
              <View style={styles.bodystails}>
            <View style={styles.CentrarcodigoQR}>
          <QRCode value="https://github.com/adhernea" />
            </View>
              </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    height: '15%',
    paddingTop: 50,
    width: '100%',
  },
  firsttoprowContainer: {
    backgroundColor: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: 'row',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonruta: {
    width:'50%',
  },
  bodystails: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%'
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100
  },
  cosasQmeGustanMuxoEstails: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 20,
    color: 'darkred',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16,
    backgroundColor: 'silver'
  },
  CentrarcodigoQR: {
    justifyContent: 'center',
    borderWidth: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  }
});
