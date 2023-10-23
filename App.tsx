import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [displayMyInfo, setDisplayMyInfo] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.firsttoprowContainer}>My Portfolio App</View>
        <View style={styles.rowTopSecondContainer}>
          <Pressable onPress={() => setDisplayMyInfo(true)}>Mi info</Pressable>
          <Pressable onPress={() => setDisplayMyInfo(false)}>Mi Repo</Pressable>
        </View>
      </View>
      {
        displayMyInfo ?
          <View style={styles.bodystails}>
            <Text>
              Descripción sobre mí!
            </Text>
            <Text>
              Cosas que me gustan:
            </Text>
            <ScrollView>
              <Text>Cosa uno</Text>
              <Text>Cosa dos</Text>
              <Text>Cosa tres</Text>
              <Text>Cosa cuatro</Text>
              <Text>Cosa cinco</Text>
              <Text>Cosa seis</Text>
            </ScrollView>
          </View>
          :
          <View style={styles.bodystails}>
            <QRCode
              value="https://github.com/adhernea"
            />
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
  topContainer: {},
  firsttoprowContainer: {},
  rowTopSecondContainer: {},
  bodystails: {

  }
});
