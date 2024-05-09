import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { SafeAreaView } from "react-native";
export default function Chatroom() {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");

  function handlesubmit() {
    Vibration.vibrate(100);
    setMsg(text);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <View style={styles.main}>
        <Image
          style={styles.back}
          source={require("../assets/icons8-back-50.png")}
        ></Image>
        <Text style={styles.head}>Adacode Chat</Text>
      </View>

      <ScrollView style={StyleSheet.t}>
        <View style={styles.b}>
          <View style={styles.b1}>
            <Text>{msg}</Text>
          </View>
          <View style={styles.b2}></View>
          <View style={styles.b3}></View>
          <View style={styles.b4}></View>
          <View style={styles.b5}></View>
        </View>
      </ScrollView>
      <View style={styles.last}>
        <TextInput
          style={styles.b6}
          placeholder="type a message"
          onChangeText={(value) => setText(value)}
        ></TextInput>
        <View style={styles.imgadjt}>
          <TouchableOpacity style={styles.b7} onPress={handlesubmit}>
            <Image
              style={styles.send}
              source={require("../assets/icons8-send-message-30.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 20,
    height: 20,
    margin: 15,
  },
  head: {
    fontSize: 25,
  },
  main: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 80,
  },
  b1: {
    backgroundColor: "#EBEAEA",
    width: 230,
    height: 40,
    borderRadius: 10,
    left: 100,
    padding: 10,
    gap: 20,
  },
  b3: {
    backgroundColor: "#EBEAEA",
    width: 230,
    height: 40,
    borderRadius: 10,
    left: 100,
  },
  b4: {
    backgroundColor: "#EBEAEA",
    width: 230,
    height: 40,
    borderRadius: 10,
    left: 100,
  },
  b2: {
    backgroundColor: "#9747FF",
    width: 230,
    height: 40,
    borderRadius: 10,
    padding: 10,
    right: 40,
  },
  b5: {
    backgroundColor: "#9747FF",
    width: 230,
    height: 40,
    borderRadius: 10,
    right: 40,
  },
  b: {
    gap: 20,
    margin: 50,
    paddingBottom: 300,
  },
  b6: {
    backgroundColor: "#EBEAEA",
    width: 310,
    height: 50,
    borderRadius: 30,
    padding: 10,
  },
  b7: {
    backgroundColor: "#EBEAEA",
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  last: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  send: {
    width: 25,
    height: 25,
    transform: [{ rotate: "45deg" }],
    right: 3,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    justifyContent: "space-between",
  },
});
