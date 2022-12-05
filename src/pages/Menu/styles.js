import { DatePickerAndroid, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerFull: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerLogo: {
      flexGrow:1.5,
      alignItems: 'center',
      justifyContent: "flex-end",
    },
    containerTitle: {
      flexGrow:0.5,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    containerPatro: {
      flexGrow:1,
      flexDirection:"row",
      alignItems: 'flex-end',
      justifyContent: 'space-around',
    },
    text: {
      color:"white",
    },
      perfil:{
        width:150,
        height:150,
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
      imgpatro:{
        width:70,
        height:70,
        resizeMode:"contain",
        marginBottom:100,
      },
      m1:{
        marginTop:130,
        borderColor:"red",
        borderWidth:2,
      }
  });
  