import { Text } from "react-native";
import Chatroom from "./screens/Chatroom";
import Groups from "./screens/Groups";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./screens/Signup";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const Stack = createStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyDadHHPswONNPoTAlrV4zwQP6yu3ThSJh4",
  authDomain: "trying-fa97d.firebaseapp.com",
  projectId: "trying-fa97d",
  storageBucket: "trying-fa97d.appspot.com",
  messagingSenderId: "576839939550",
  appId: "1:576839939550:web:fbff2c1f8dcee502fb194f",
  measurementId: "G-QPRX1YFJFM",
  databaseURL:
    "https://trying-fa97d-default-rtdb.asia-southeast1.firebasedatabase.app",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chatroom">
        <Stack.Screen name="Chatroom" component={Chatroom} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Groups"
          component={Groups}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
