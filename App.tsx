import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import miner from "./miner";
const version = "Alpha 0.1";

export default function App() {
  const [active, setActive] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Daten sammeln starten");

  useEffect(() => {
    setButtonLabel(active ? "Daten sammeln stoppen" : "Daten sammeln starten");
    console.log("🔨 rendered!");
  });

  return (
    <View style={styles.container}>
      <Text style={styles.head}>ICE Miner {version}</Text>
      <Text style={styles.infoText}>
        Zum Fortfahren müssen Sie sich im ICE-WLAN befinden.
      </Text>
      <Button
        onPress={() => {
          setActive(!active);
          miner();
        }}
        title={buttonLabel}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    margin: 30,
    justifyContent: "space-between",
  },
  head: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 30,
  },
  infoText: {
    fontStyle: "italic",
    paddingBottom: 30,
  },
});
