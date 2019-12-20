import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("My first React Native app!");
  const [textChange, setTextChange] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Change Text"
        onPress={() => {
          if (!textChange) {
            setOutputText("The text changed");
          } else {
            setOutputText("The text changed again");
          }
          setTextChange(!textChange);
        }}
      />
      <Text>textChange: {textChange.toString()}</Text>
      <Button
        title="Reset"
        onPress={() => {
          setOutputText("My first React Native app!");
          setTextChange(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
