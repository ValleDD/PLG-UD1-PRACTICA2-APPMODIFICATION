import React, { useState } from "react";
import {StyleSheet, Image, View, Pressable, ImageProps } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import CardList from "./CardList";
import Card from "./Card";
import QR from "./QR";
import { CardData } from "../data/CardType";

interface BodyProps {
  setIsValleProfile: React.Dispatch<React.SetStateAction<boolean>>
  isValleProfile: boolean
  avatarImage: ImageProps
  cardsData: CardData[]
  QRRoute: string
}

const Body: React.FC<BodyProps> = ({
  setIsValleProfile: setIsValleProfile,
  isValleProfile: isValleProfile,
  avatarImage: avatarImage,
  cardsData: cardsData,
  QRRoute: QRRoute
}) => {
  const [displayAboutMe, setDisplayAboutMe] = useState(Boolean);
  return (
    <View style={styles.body}>
      <View>
        <View>
          <Image
            style={styles.avatar}
            source={avatarImage}
          ></Image>
          <View style={styles.iconView}>
          <Ionicons
            name= 'reload-outline'
            size={30}
            style={styles.icon}
            color={'black'}
            onPress={() => setIsValleProfile(!isValleProfile)}
          />
          </View>
        </View>
        <View style={styles.infoOptions}>
          <Pressable style={{width: '35%'}} onPress={() => setDisplayAboutMe(true)} >
            <Card 
            text={"Sobre mi"}
            />
          </Pressable>
          <Pressable style={{width: '35%'}} onPress={() => setDisplayAboutMe(false)}>
            <Card 
            text={"Github QR"}
            />
          </Pressable>
        </View>
        <View >
          {displayAboutMe ? <CardList cardsData={cardsData} /> : <QR QRRoute={QRRoute} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   
    body: {
      width: "100%",
      backgroundColor:"#43D6F5"
    },
    avatar: {
      height: 180,
      width: 180,
      borderRadius: 100,
      borderWidth: 10,
      borderColor:"#fff",
      marginTop: 20,
      marginBottom:-40,
      alignSelf: 'center',
    },
    iconView:{
      width: 40,
      height: 40,
      alignSelf: 'center',
      marginBottom: 40,
      backgroundColor:"#fff",
      borderRadius: 100,
      borderWidth: 3,
      borderColor: "#fff",
      justifyContent: 'center'
    },
    icon: {
      alignSelf: 'center'
    },
    infoOptions: {
      flexDirection: 'row',
      backgroundColor: "#43D6F5",
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 1 //This is for the shadow box to be visible and not be blocked by the CardList
    },
  });
export default Body;
