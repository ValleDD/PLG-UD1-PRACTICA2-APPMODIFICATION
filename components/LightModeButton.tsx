import React, {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Switch, View } from "react-native";

interface LightProps {
  setIsLightMode: React.Dispatch<React.SetStateAction<boolean>>;
  isLightMode: boolean;
}

const LightModeButton: React.FC<LightProps> = ({
  setIsLightMode: setIsLightMode,
  isLightMode: isLightMode,
}) => {
    const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={{flexDirection: 'row'}} >
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {
            setIsLightMode(!isLightMode)
            setIsEnabled(previousState => !previousState)
        }}
        value={isEnabled}
      />
      <Ionicons
        name={isLightMode ? "moon-outline" : "sunny-outline"}
        size={30}
        style={{ alignSelf: "center" }}
        color={isLightMode ? "black" : "white"}
      />
    </View>
  );
};

export default LightModeButton;
