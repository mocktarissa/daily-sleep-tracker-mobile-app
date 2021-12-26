import React from "react";
import { TouchableOpacity } from "react-native";
interface ButtonProps {
  children: any;
  styles?:any;
}
function Appbutton(props: ButtonProps) {
  return <TouchableOpacity style={props.styles}>{props.children}</TouchableOpacity>;
}

export default Appbutton;
