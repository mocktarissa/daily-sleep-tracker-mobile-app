import React from "react";
import { TextInput, View } from "react-native";

interface AppInput {
  style: any;
}
function AppInput(props) {
  return <TextInput style={props.style} />;
}

export default AppInput;
