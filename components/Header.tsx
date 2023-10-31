import React from "react";
import { Button, Pressable, Text, View, StyleSheet } from "react-native";
import LightModeButton from "./LightModeButton";

type HeaderProps = {
  setIsLightMode: React.Dispatch<React.SetStateAction<boolean>>
  isLightMode: boolean
  headerText : string

}

const Header: React.FC<HeaderProps> = ({
  setIsLightMode: setIsLightMode,
  isLightMode: isLightMode,
  headerText: headerText
}) => {
  return (
    <View style={[styles.topContainer, (isLightMode? styles.light: styles.dark)]}>
      <Text style={[styles.firstTopRowContainer, (isLightMode? {color: 'black'}: {color: 'white'})]}>{headerText}</Text>
      <LightModeButton setIsLightMode={setIsLightMode} isLightMode={isLightMode}/>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 50,
    width: "100%",
  },
  firstTopRowContainer: {
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  light: {
    backgroundColor: "#43D6F5",
  },
  dark: {
    backgroundColor: "#232D3F",
  },
});

export default Header;
