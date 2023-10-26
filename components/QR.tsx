import React from "react";
import {StyleSheet, View } from 'react-native';
import QRCode from "react-native-qrcode-svg";

const QR = () => {
  return (
    <View style={styles.body}>
      <View style={styles.CenterQR}>
        <QRCode value="https://github.com/adhernea" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   
    body: {
      width: "100%",
      borderWidth: 2,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "space-between",
      height: "85%",
    },
    CenterQR: {
      justifyContent: "center",
      borderWidth: 1,
      width: "100%",
      height: "100%",
      alignItems: "center",
    },
  });
export default QR;
