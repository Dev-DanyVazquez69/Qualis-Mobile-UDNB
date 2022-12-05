import { DatePickerAndroid, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerFull: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
      bg:{
        height:"100%",
        width:"100%",
        resizeMode:"container"
      },
      v1:{
        flex:1,
        flexDirection:"column",
        marginTop:130,
      },
      title:{
        height:100,
        alignItems:"center",
      },
      viewMaps:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-evenly",
      },
      card:{
        marginBottom:50,
        width:"85%",
        borderColor:"black",
        borderWidth:2,
      },
      tx:{
        fontWeight:"700",
        borderBottomWidth:2,
        padding:10,
        backgroundColor:"black",
        color:"white",
      },
  });
  