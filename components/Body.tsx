import React, { useState } from "react";
import { StyleSheet, Image, View, Pressable, ImageProps } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import CardList from "./CardList";
import Card from "./Card";
import QR from "./QR";
import { CardData, ProfileData } from "../data/CardTypes";

interface BodyProps {
  setIsValleProfile: React.Dispatch<React.SetStateAction<boolean>>
  isLightMode: boolean
  isValleProfile: boolean;
  cardsData: CardData[];
  profileData: ProfileData;
}

const Body: React.FC<BodyProps> = ({
  setIsValleProfile: setIsValleProfile,
  isLightMode: isLightMode,
  isValleProfile: isValleProfile,
  cardsData: cardsData,
  profileData: profileData,
}) => {
  const [displayAboutMe, setDisplayAboutMe] = useState(true);
  return (
    <View style={[styles.body, (isLightMode? styles.backgroundLight: styles.backgroundDark)]}>
      <View>
        <View>
          <Image style={[styles.avatar, (isLightMode? styles.borderColorLight: styles.borderColorDark)]} source={profileData.image}></Image>
          <View style={[styles.iconView, (isLightMode? styles.borderColorLight : styles.borderColorDark), (isLightMode? {backgroundColor: 'white'}: {backgroundColor: 'black'})]}>
            <Ionicons
              name="reload-outline"
              size={30}
              style={styles.icon}
              color={(isLightMode? 'black' : 'white')}
              onPress={() => setIsValleProfile(!isValleProfile)}
            />
          </View>
        </View>
         <View style={styles.infoOptions}>
          <Pressable
            style={{ width: "35%" }}
            onPress={() => setDisplayAboutMe(true)}
          >
            <Card text={"Sobre mi"} />
          </Pressable>
          <Pressable
            style={{ width: "35%" }}
            onPress={() => setDisplayAboutMe(false)}
          >
            <Card text={"Github QR"} />
          </Pressable>
        </View>
        {<View style={(displayAboutMe? styles.cardContainerList : styles.cardQRList)}>
          {displayAboutMe ? (
            <CardList cardsData={cardsData} />
          ) : (
            <QR QRRoute={profileData.QRRoute} />
          )}
        </View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
  },
  backgroundLight:{
    backgroundColor: "#43D6F5",
  },
  backgroundDark:{
    backgroundColor: "#232D3F",
  },
  borderColorLight: {
    borderColor: "#fff",
  },
  borderColorDark: {
    borderColor: "#000000",
  },
  avatar: {
    height: 180,
    width: 180,
    borderRadius: 100,
    borderWidth: 10,
    marginTop: 20,
    marginBottom: -40,
    alignSelf: "center",
  },
  iconView: {
    width: 40,
    height: 40,
    alignSelf: "center",
    marginBottom: 40,
    borderRadius: 100,
    borderWidth: 3,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
  infoOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1, //This is for the shadow box to be visible and not be blocked by the CardList
  },
  cardContainerList: {
    justifyContent: "center",
    height: "60%",
    width: "100%",
  },
  cardQRList: {
    justifyContent: "center",
    height: "50%",
    width: "100%",
  },
});
export default Body;
