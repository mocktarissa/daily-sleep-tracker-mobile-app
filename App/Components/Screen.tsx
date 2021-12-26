import React from "react";
import { View, StyleSheet } from "react-native";

function Screen(props: { children: any }) {
  return <View style={styles.container}>{props.children}</View>;
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
