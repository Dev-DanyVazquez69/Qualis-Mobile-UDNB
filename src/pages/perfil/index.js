import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button, ScrollView } from 'react-native';
import styles from "./styles"

const imgBg = "../../../assets/fundo.png"

export default function Menu({navigation}) {
  return (

    <View style={styles.containerFull}>
        <ImageBackground source={require(imgBg)} style={styles.bg}>
          <View style={styles.v1}>
            <View style={styles.v2}>
              <Image source={require("../../../assets/perfil.png")} style={styles.img}></Image>
              <Text>Fulana de tal</Text>
            </View>
            <View style={styles.v2}>

            </View>
          </View>
        </ImageBackground>
      </View>
  );
}