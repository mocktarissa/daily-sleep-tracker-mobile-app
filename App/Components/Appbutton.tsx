import React from "react";
import { TouchableOpacity } from "react-native";
interface ButtonProps {
  children: any;
}
function Appbutton(props: ButtonProps) {
  return <TouchableOpacity>{props.children}</TouchableOpacity>;
}

export default Appbutton;
