import React from "react";
import { StyleSheet } from "react-native";
import AppInput from "../Components/AppInput";
import AppText from "../Components/AppText";
import Screen from "../Components/Screen";

function LoginScreen() {
  return (
    <Screen>
      <AppText styles={styles.text}>Welcome to your Sleep Tracker</AppText>
      <AppText styles={styles.text}>Email</AppText>
      <AppInput placeholder="Enter your email" />
      <AppText>Password</AppText>
      <AppInput />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  input: {},
});

export default LoginScreen;
