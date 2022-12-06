import { DatePickerAndroid, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerFull: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth:2,
      // borderColor:"pink",
    },
    containerAll:{
      marginTop:120,
      flex:1,
      height:"90%",
      // borderWidth:2,
      // borderColor:"pink",
    },
    containerPerfil: {
      flex:2,
      alignItems: 'center',
      justifyContent: "flex-start",
      // borderWidth:2,
    },
    containerMeio: {
    flex:0.3,
      alignItems:'center',
      justifyContent:"flex-start",
      // borderWidth:2,
    },
    containerExames: {
      flex:2,
      alignItems:'center',
      justifyContent:"flex-end",
      borderWidth:1,
    },
      bg:{
        height:"100%",
        width:"100%",
        resizeMode:"container"
      },
      title:{
        fontSize:50,
        fontWeight:"bold",
      },
      bgPerfil:{
        width:150,
        height:150,
      }
  });
  