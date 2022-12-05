import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import styles from "./styles"

const imgBg = "../../../assets/fundo.png"

export default function App({navigation}) {
  return (

    <View style={styles.containerFull}>
        <ImageBackground
        source={require(imgBg)}
        style={styles.bg}
        >
          <View style={styles.m1}>
          <View
          style={styles.containerLogo}>
          <Image
          source={require("../../../assets/fita.png")}
          style={styles.perfil}
          /> 
          </View>
          <View
          style={styles.containerTitle}>
          <Text
          style={styles.title}>
            BEYOND CURE</Text>
           <Button
          title="Proseguir para o menu"
          onPress={() => navigation.navigate("menu")}
          style={styles.button}
          />
          </View>
          <View
          style={styles.containerPatro}>
          <Image
          source={require("../../../assets/fundo_undb.png")}
          style={styles.imgpatro}
          />
          <Image
          source={require("../../../assets/saoluis.png")}
          style={styles.imgpatro}
          />
          <Image
          source={require("../../../assets/maranhao.png")}
          style={styles.imgpatro}
          />
          </View>
          </View>
        </ImageBackground>
      </View>
  );
}