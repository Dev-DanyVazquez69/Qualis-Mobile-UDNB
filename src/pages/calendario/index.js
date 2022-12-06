import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button, useState } from 'react-native';
import styles from "./styles"
import DatePicker from "@react-native-community/datetimepicker"

const imgBg = "../../../assets/fundo.png"

export default function Menu({navigation}) {

  return (

    <View style={styles.containerFull}>
        <ImageBackground source={require(imgBg)} style={styles.bg}>
            <View style={styles.container}>
                <View style={styles.containertitle}>
                    <Text>Caléndario de Compromissos</Text>
                </View>
            </View>
        </ImageBackground>
      </View>
  );
}