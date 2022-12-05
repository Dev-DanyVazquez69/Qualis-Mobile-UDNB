import React from "react";
import { ImageBackground } from "react-native";

const imgBg = "../assets/Fundo.png"


export default function Comp01(){
    return (
        <ImageBackground
        source={require(imgBg)}
        style={styles.bg}
        />
    )
}