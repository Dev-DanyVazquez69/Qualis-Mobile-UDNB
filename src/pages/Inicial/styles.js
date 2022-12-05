import { DatePickerAndroid, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerFull: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    containerLogo: {
      flexGrow:1,
      alignItems: 'center',
      justifyContent: "flex-start",
    },
    containerTitle: {
      flexGrow:1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    containerPatro: {
      padding:45,
      flexGrow:2,
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderColor:"red",
      // borderWidth:2,
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
      },
      m1:{
        marginTop:130,
        flex:1,
  
      }
  });
  