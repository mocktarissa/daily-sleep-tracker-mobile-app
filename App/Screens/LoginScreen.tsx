import React from "react";
import { StyleSheet, View } from "react-native";
import Appbutton from "../Components/Appbutton";
import AppInput from "../Components/AppInput";
import AppText from "../Components/AppText";
import Screen from "../Components/Screen";

function LoginScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText styles={styles.text}>Welcome to your Sleep Tracker</AppText>
        <AppText styles={styles.text}>Email</AppText>
        <AppInput style={styles.input} placeholder="Enter your email" />
        <AppText>Password</AppText>
        <AppInput style={styles.input} />
        <Appbutton styles={styles.button}>
          <AppText styles={styles.buttonText}>Login</AppText>
        </Appbutton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    borderColor: "#eee",
    borderWidth: 2,
    width: "80%",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#d4caca",
    width: "50%",
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
