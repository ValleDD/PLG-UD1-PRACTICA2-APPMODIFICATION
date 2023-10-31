import { useState } from "react";
import { ImageProps, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import FlipCard from "react-native-flip-card";
import {
  cardsData as adanCardData,
  profileData as adanProfileData,
} from "./data/AdanInfo";
import {
  cardsData as valleCardData,
  profileData as valleProfileData,
} from "./data/ValleInfo";

export default function App() {
  const [isValleProfile, setIsValleProfile] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    
      <FlipCard
        style={styles.container}
        friction={100}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={isValleProfile}
        clickable={false}>
        {[
          <View>
            <Header
              setIsLightMode={setIsLightMode}
              isLightMode={isLightMode}
              headerText={"Valle Portfolio"}
            />
            <Body
                setIsValleProfile={setIsValleProfile}
                isLightMode={isLightMode}
                isValleProfile={isValleProfile}
                cardsData={valleCardData}
                profileData={valleProfileData}
              />
          </View>
          ,
          <View>
            <Header
              setIsLightMode={setIsLightMode}
              isLightMode={isLightMode}
              headerText={"Adan Portfolio"}
            />
            <Body
                setIsValleProfile={setIsValleProfile}
                isLightMode={isLightMode}
                isValleProfile={isValleProfile}
                cardsData={adanCardData}
                profileData={adanProfileData}
              />
          </View>,
        ]}
      </FlipCard>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 20,
  },
});
