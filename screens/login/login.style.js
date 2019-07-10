import{StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    bg: {
      paddingTop: 30,
      width: null,
      height: null,
      resizeMode :'cover',
      backgroundColor :'rgba(0,0,0,1)',
    },
    wrapper: {
      paddingVertical: 30,
      marginTop : '50%',
    },
    inputWrap: {
      flexDirection: "row",
      marginVertical: 10,
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: "#CCC"
    },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: "flex-end",
      justifyContent: "center",
    },
    icon: {
      height: 20,
      width: 20,
      alignItems : 'flex-end'
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      textAlign : 'right',
      color : 'white'
    },
    button: {
      backgroundColor: "#2196f3",
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18,
    },
    signupWrap: {
      backgroundColor: "transparent",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    accountText: {
      textAlign : 'right',
      color: "#D8D8D8"
    },
    signupLinkText: {
      color: "#FFF",
      marginLeft: 5,
      textAlign : 'left'
    }
  });
  