import React from "react";
import { View,Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Card(){
    return (
        <View style={styles.containerfull}>
            <View style={styles.container}>
                <Text style={styles.txt}>Ressonância magnética </Text>
                <Image source={require("../assets/fita.png")} style={styles.bg}></Image>
                <Text>Data:07/09/22</Text>
                <Text>Clinica X</Text>
                <Text>Doutor:X</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.txt}>Biópsia</Text>
                <Image source={require("../assets/fita.png")} style={styles.bg}></Image>
                <Text>Data:05/12/22</Text>
                <Text>Clinica X</Text>
                <Text>Doutor:X</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.txt}>Exames de IHC e FISH </Text>
                <Image source={require("../assets/fita.png")} style={styles.bg}></Image>
                <Text>Data:25/11/22</Text>
                <Text>Clinica X</Text>
                <Text>Doutor:X</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.txt}>Ultrassonografia </Text>
                <Image source={require("../assets/fita.png")} style={styles.bg}></Image>
                <Text>Data:10/10/22</Text>
                <Text>Clinica X</Text>
                <Text>Doutor:X</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    //   backgroundColor:"pink",
      width:"40%",
      height:"40%",
      justifyContent: 'flex-start',
      alignItems:"center",
      marginBottom:15,
      borderWidth:1,
    },
    containerfull:{
        alignContent:"center",
        justifyContent:"space-around",
        flexWrap:"wrap",
        flexDirection:"row",
        width:"100%",
        height:"100%",
        // backgroundColor:"green",
    },
    txt:{
        fontSize:15,
        fontWeight:"700",
        textAlign:"center",
    },
    bg:{
        width:30,
        height:30,
    }
}
)