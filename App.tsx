import { useState } from "react";
import { ImageProps, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import { cardsData as adanCardData, profileData as adanProfileData} from './data/AdanInfo'
import { cardsData as valleCardData,  profileData as valleProfileData} from './data/ValleInfo'

export default function App() {
  const [isValleProfile, setIsValleProfile] = useState(true);
  return (
    <View style={styles.container}>
      {(isValleProfile)? <Header headerText={'Valle Portfolio'}/> : <Header headerText={'Adán Portfolio'}/>}
      <View style={styles.body}>
      {isValleProfile ? (
        <Body 
          setIsValleProfile={setIsValleProfile}
          isValleProfile={isValleProfile}
          cardsData={valleCardData} 
          profileData={valleProfileData}/>
          
      ) : (
        <Body 
            setIsValleProfile={setIsValleProfile}
            isValleProfile={isValleProfile}
            cardsData={adanCardData} 
            profileData={adanProfileData}/>
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
