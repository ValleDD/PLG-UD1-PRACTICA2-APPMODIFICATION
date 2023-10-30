import React from "react";
import {StyleSheet, View } from 'react-native';
import QRCode from "react-native-qrcode-svg";

interface QRProps {
  QRRoute: string
}

const QR:React.FC<QRProps> = ({QRRoute: QRRoute}) => {
  return (
      <View style={styles.CenterQR}>
        <QRCode value={QRRoute}/>
      </View>
  );
};

const styles = StyleSheet.create({
    CenterQR: {
      alignItems: "center",
      justifyContent: 'center',
    },
  });
export default QR;
