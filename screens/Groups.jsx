import { StyleSheet,View,Text,SafeAreaView,Image} from "react-native"


export default function Groups(){


return(
<SafeAreaView style={styles.container}>
    <View style={styles.main}>
    <View style={styles.round}><Image style={styles.dp1}source={require("../assets/adac.png")}></Image></View>
        
        <View style={styles.v1}><Text style={styles.test}>Adacode Chats</Text></View>
        <View style={styles.v2}><Text style={styles.test1}>You: Hello World</Text></View>
       </View>
       <View style={styles.main}>
    <View style={styles.round}><Image style={styles.dp1}source={require("../assets/adac.png")}></Image></View>
        
        <View style={styles.v1}><Text style={styles.test}>Adacode Chats</Text></View>
        <View style={styles.v2}><Text style={styles.test1}>You: Hello World</Text></View>
       </View>
       <View style={styles.main}>
    <View style={styles.round}><Image style={styles.dp1}source={require("../assets/adac.png")}></Image></View>
        
        <View style={styles.v1}><Text style={styles.test}>Adacode Chats</Text></View>
        <View style={styles.v2}><Text style={styles.test1}>You: Hello World</Text></View>
       </View>
    
    
    
    
    
    </SafeAreaView>
)
}
const styles=StyleSheet.create({
    main:{
        backgroundColor: "#9747FF",
        margin:70,
        height:70,
        right:68,
        borderRadius:15,
        width:380,
        
        


    },
    round:{

        height:50,
        width:50,
        backgroundColor: "black",
        borderRadius:40,
        margin:8,
        right:1,

        



    },
    test:{
        fontSize:20,
        left:100,
        margin:-40,
        color:'white',
        

    },
    v1:{
        margin:-15,
        left:30,

    },
    test1:{
        left:100,
        margin:-5,
        color:'white',
    },
    v2:{
        margin:5,
        left:-10
    },
    dp1:{
        height:50,
        width:50,
        borderRadius:45,

    },
    container:{
        justifyContent:'space-evenly',
        gap:-130,
    }
});