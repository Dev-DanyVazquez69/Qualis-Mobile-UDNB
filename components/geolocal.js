import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps"



export default function Maps(){
    return(
        <MapView
          style={{width:"100%",height:100,}}
          initialRegion={{
            latitude:-2.520179633204437, 
            longitude:-44.22942728463337,
            latitudeDelta:0.092,
            longitudeDelta:0.0421,
          }}
          />
    )
}