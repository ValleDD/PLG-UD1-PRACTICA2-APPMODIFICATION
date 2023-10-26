import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import QR from "./components/QR";

export default function App() {
  const [displayAboutMe, setDisplayAboutMe] = useState(true);
  return (
    <View style={styles.container}>
      <Header setDisplayAboutMe={setDisplayAboutMe}/>
      {displayAboutMe ? <AboutMe/> : <QR/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
