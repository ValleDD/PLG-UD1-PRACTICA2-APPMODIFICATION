import { useState } from "react";
import { ImageProps, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import { cardsData as adanData } from './data/AdanInfo'
import { cardsData as valleData } from './data/ValleInfo'

export default function App() {
  const [isValleProfile, setIsValleProfile] = useState(true);
  const adanImage : ImageProps = require('./assets/adan.jpeg')
  const valleImage : ImageProps = require('./assets/valle.jpeg')
  const valleQRRoute: string = 'https://github.com/ValleDD'
  const adanQRRoute: string = 'https://github.com/adansif'
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.body}>
      {isValleProfile ? (
        <Body 
          setIsValleProfile={setIsValleProfile}
          isValleProfile={isValleProfile}
          avatarImage={valleImage}
          cardsData={valleData} 
          QRRoute={valleQRRoute}/>
          
      ) : (
        <Body 
            setIsValleProfile={setIsValleProfile}
            isValleProfile={isValleProfile}
            avatarImage={adanImage}
            cardsData={adanData} 
            QRRoute={adanQRRoute}/>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body:{
    flex:20
  }
});
