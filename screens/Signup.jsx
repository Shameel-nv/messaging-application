import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Signup() {
    const navigator = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
              <StatusBar style="auto" />
        <View>
         <Text style={styles.test}>
         Sign up
         </Text>
          </View>
          <View style={styles.box}>
         
           <TextInput
        style={styles.t2}
    
        placeholder="Email"
      />
          <TextInput
        style={styles.t2}
    
        placeholder="Password"
        
        
      />
           
           
           <TouchableOpacity style={styles.button}><Text>Signup</Text></TouchableOpacity>
           
            
          </View>
          <TouchableOpacity style={styles.button2}>
            <Image style={styles.img1} source={require("../assets/logo.png")}></Image>
          </TouchableOpacity>
          <View style={styles.r1}>
          <Text style={styles.st}>Already a User? </Text>    
          <TouchableOpacity  
              onPress={() => navigator.navigate("Login")}
            >
          <Text style={styles.st1}>Login</Text></TouchableOpacity>
          </View>
          </SafeAreaView>










 
 
  );
}







const styles = StyleSheet.create({
  test:{
    fontSize:30,
    color:'black',
    margin:115,
    left:30,
    

  },
  box:{
    gap:40,
  },
  container:{
    backgroundColor: "white",
    height:900,
    width:900,
  },
  t2:{
    width:320,
    height:50,
    borderRadius:10,
    borderWidth:1,
    left:30,
    paddingHorizontal:10,
    borderColor:"#9747FF",
    

  },
  button:{
   borderWidth:1,
   borderRadius:10,
   width:70,
   height:30,
   alignItems:'center',
   justifyContent:'center',
   left:150,
   borderColor:"#9747FF",
    
   
  },
  button2:{
    borderWidth:0.5,
    borderRadius:10,
    width:60,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    left:110,
    margin:50,
    borderColor:"#9747FF",
    
    
  },
  img1:{
     height:30,
     width:30,
  } ,
  st:{

  },
  st1:{
   
    
    color:'blue',
    textDecorationLine:'underline',
 
  },
  r1:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    right:260,
  }


  

});