import React from "react";
import { StyleProp, StyleSheet, Text } from "react-native";

interface TextProps {
  children: string;
  styles?: any;
}
function AppText(props: TextProps) {
  return <Text style={styles}>{props.children}</Text>;
}

export default AppText;
const styles = StyleSheet.create({});
