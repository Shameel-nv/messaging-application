import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function Login() {
  
  const navigator = useNavigation()
  const [email,setEmail]=useState('')
  const[password,setpassword]=useState('')

  function handleSubmit(){
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("userSignedin")
         navigator.navigate("Chatroom")
         
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Failed to Signin,",errorMessage)
        Alert.alert("Check your username and password!",errorMessage)

      });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sum}>
        <StatusBar style="auto" />

        <Image
          style={styles.adacode}
          source={require("../assets/forum.gif")}
        ></Image>

        <Text style={styles.Text}>U </Text>
        <Text style={styles.Text7}> CHAT</Text>
        <View style={styles.blue}>
          <View style={styles.boxes}>
            <TextInput
              onChangeText={(value) => setEmail(value)}
              style={styles.input1}
              placeholder="enter username"
            ></TextInput>
            <TextInput
              onChangeText={(value) => setpassword(value)}
              style={styles.input2}
              placeholder="enter password"
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.bt}>login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sum: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  adacode: {
    width: 180,
    height: 180,
    margin: 15,
    margin: 30,
    right: 7,
    borderRadius:30,
  },
  Text: {
    fontSize: 30,
    margin: -16,
    padding: 0,
    fontWeight:'bold',
    right:46,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,

  },
  blue: {
    fex: 1,
    backgroundColor: "#9747FF",
    width: 390,
    height: 700,
    position: "relative",
    top: 100,
    borderRadius: 30,
  },
  input1: {
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    width: 280,
    borderRadius: 10,
    textAlign: "left",
    justifyContent: "center",
  },
  input2: {
    padding: 15,
    backgroundColor: "white",
    margin: 2,
    width: 280,
    borderRadius: 10,
    textAlign: "left",
    justifyContent: "space-evenly",
  },
  input3: {
    backgroundColor: "white",
    padding: 10,
    margin: 40,
    width: 120,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  boxes: {
    justifyContent: "center",
    alignItems: "center",
    top: 100,
  },
  bt: {
    color:'white',
  },
  button:{
    borderWidth:1,
    borderColor:'white',
    borderRadius:10,
    height:40,
    width:70,
    alignItems:'center',
    justifyContent:'center',
    margin:26,
  },
  Text7:{
    color:'green',
    fontSize: 30,
    margin: -24,
    padding: 0,
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,

  }
});
