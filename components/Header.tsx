import React from "react";
import { Button, Pressable, Text, View, StyleSheet } from "react-native";

interface HeaderProps {
  setDisplayAboutMe: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  setDisplayAboutMe: setDisplayAboutMe,
}) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.firstTopRowContainer}>My Portfolio App</Text>
      <View style={styles.secondTopRowContainer}>
        <Pressable onPress={() => setDisplayAboutMe(true)}>
          <Text style={styles.pressableStyle}>Mi info</Text>
        </Pressable>
        <Pressable
          onPress={() => setDisplayAboutMe(false)}
          accessibilityLabel="Un botón pal QR">
          <Text style={styles.pressableStyle}>Mi Repo</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    paddingTop: 50,
    width: "100%",
  },
  firstTopRowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  secondTopRowContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: 'space-around',
    alignItems: "center",
  },
  pressableStyle: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Header;
