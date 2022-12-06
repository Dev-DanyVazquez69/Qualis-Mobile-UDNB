import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button, ScrollView } from 'react-native';
import styles from "./styles"
import Card from "../../../components/card"

const imgBg = "../../../assets/fundo.png"

export default function Menu({navigation}) {
  return (

    <View style={styles.containerFull}>
        <ImageBackground source={require(imgBg)} style={styles.bg}>
          <View style={styles.containerAll}>
            <View style={styles.containerPerfil}>
              <Image
              source={require("../../../assets/perfil.png")}
              style={styles.bgPerfil}
              />
              <Text style={styles.title}>Maria das Graças</Text>
              <View style={{marginTop:25,flexDirection:"row", justifyContent:"center", alignItems:"center"
            }}>
                <View style={{flex:1,alignItems:"center"}}><Text style={{fontSize:20,}}>Idade:25</Text></View>
                <View style={{flex:1,alignItems:"center",}}><Text style={{fontSize:20, fontWeight:"700"}}>PONTOS:255</Text></View>
                <View style={{flex:1,alignItems:"center"}}><Text style={{fontSize:20,}}>Peso:68KG</Text></View>
              </View>
            </View>
            <View style={styles.containerExames}>
              <Text style={{fontSize:30,fontWeight:"200"}}>Consultas/Exames realizados</Text>
              <Card></Card>
            </View>
          </View>
        </ImageBackground>
      </View>
  );
}