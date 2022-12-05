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
          title="Prosseguir para a tela de perfil"
          onPress={() => navigation.navigate("perfil")}
          style={styles.button}
          />
          <Button
          title="Prosseguir para a tela de filas"
          onPress={() => navigation.navigate("filas")}
          style={styles.button}
          />
          <Button
          title="Prosseguir para a tela de calendario"
          onPress={() => navigation.navigate("calendario")}
          style={styles.button}
          />
          </View>
        </ImageBackground>
      </View>
  );
}