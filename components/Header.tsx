import React from "react";
import { Button, Pressable, Text, View, StyleSheet } from "react-native";

type HeaderProps = {
  headerText : string
}

const Header: React.FC<HeaderProps> = ({headerText: headerText}) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.firstTopRowContainer}>{headerText}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 50,
    width: "100%",
  },
  firstTopRowContainer: {
    backgroundColor: "#43D6F5",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
});

export default Header;
