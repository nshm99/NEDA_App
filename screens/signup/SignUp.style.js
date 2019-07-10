import{StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent:"space-between",
      backgroundColor: 'rgba(0,0,0,1)'
    },
    bg: {
      paddingTop: 30,
      width: null,
      height: null,
      resizeMode :'cover',
    },
    headerContainer: {
      flex: 1,
    },
    headerIconView: {
      marginLeft: 10,
      backgroundColor: 'transparent'
    },
    headerBackButtonView: {
      width: 25,
      height: 25,
    },
    backButtonIcon: {
      width: 25,
      height: 25
    },
    headerTitleView: {
      backgroundColor: 'transparent',
      marginTop: 25,
      marginLeft: 25,
      alignItems:'center'
    },
    titleViewText: {
      fontSize: 40,
      color: '#fff',
    },
    inputs: {
      paddingVertical: 20,
    },
    IconView: {
      flex : 1,
      flexDirection :'column',
      justifyContent :"space-between",
      width : 100,
      height : 100,
      marginLeft : '39%',
      marginTop : '1%',
      borderRadius : 50
    },
    DocButtonIcon : {
      width : 100,
      height : 100,
      marginTop : '40%'
    },
    
  })
  