import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import styles from "./styles"

const imgBg = "../../../assets/fundo.png"

export default function Menu({navigation}) {
  return (

    <View style={styles.containerFull}>
        <ImageBackground
        source={require(imgBg)}
        style={styles.bg}
        >
          <View style={styles.m1}>
           <Button
          title="Prosseguir para o menu"
          onPress={() => navigation.goBack()}
          style={styles.button}
          />
          </View>
        </ImageBackground>
      </View>
  );
}