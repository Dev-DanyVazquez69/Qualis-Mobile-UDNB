import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, Image, ImageBackground, Button, ScrollView } from 'react-native';
import styles from "./styles"
import Maps from "../../../components/geolocal"

const imgBg = "../../../assets/fundo.png"

export default function Menu({navigation}) {
  return (

    <View style={styles.containerFull}>
        <ImageBackground source={require(imgBg)} style={styles.bg}>
          <View style={styles.v1}>
            <View style={styles.title}>
              <Text style={{fontSize:50,}}>Clínicas/Hospitais</Text>
              <Text>Veja onde encontrar locais com profissionais da área</Text>
            </View>
            <View style={{height:100,alignItems:"center", borderBottomWidth:5,marginBottom:10,}}>
              <Image
              source={require('../../../assets/pesquisa.png')}
              style={styles.pesquisa}
              />
            </View>
            <ScrollView style={{margin:15,width:"90%",}}>
            <View style={styles.viewMaps}>
              <View style={styles.card}>
                <Text style={styles.tx}>Hospital/Clinica X</Text>
                <Maps/>
              </View>
              <View style={styles.card}>
                <Text style={styles.tx}>Hospital/Clinica X</Text>
                <Maps/>
              </View>
              <View style={styles.card}>
                <Text style={styles.tx}>Hospital/Clinica X</Text>
                <Maps/>
              </View>
              <View style={styles.card}>
                <Text style={styles.tx}>Hospital/Clinica X</Text>
                <Maps/>
              </View>
              <View style={styles.card}>
                <Text style={styles.tx}>Hospital/Clinica X</Text>
                <Maps/>
              </View>
              <View style={styles.card}>
                <Text style={styles.tx}>Hospital/Clinica X</Text>
                <Maps/>
              </View>
            </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
  );
}