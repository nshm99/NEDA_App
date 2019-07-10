import{StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      width: null,
      height: null,
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    searchBarContainer: {
      padding: 50,
      height: 40,
      width: 375,
      marginBottom: 40,
      alignItems: 'center',
      justifyContent:'center',
      // marginTop:20
    },
    profileeditbutton :{
      // padding: 50,
      // paddingTop:10,
      height: 40,
      width: 375,
      alignItems: 'center',
      justifyContent:'center',
      marginTop:'35%',
    },
    profileedit : {
      marginBottom:'5%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      textAlign: 'center',
      // marginRight :'5%',
      padding :'2%',
      marginLeft : "15%",
      // fontFamily: 'Arial',
      color: 'white',
      backgroundColor: 'blue',
      alignItems :'center',
      justifyContent :'space-between',
      textAlign :'center',
      width :"50%",

    },
    searchBox: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      textAlign: 'center',
      // marginRight :'5%',
      padding :'2%',
      marginLeft : "15%",
      // fontFamily: 'Arial',
      color: 'white',
      backgroundColor: '#aebfbe',
      alignItems :'center',
      justifyContent :'space-between',
      textAlign :'center',
      width :"50%",
    },
    input: {
      margin: 5,
      width: 320,
      height: 50,
      padding: 5,
      fontSize: 18,
      borderColor: 'white',
      borderRadius: 5,
      backgroundColor: 'white',
      textAlign: 'center',
      alignSelf: 'center'
    },
    photo: {
      height: 40,
      width: 40,
      borderRadius: 20
    },
    listingsContainer: {
      marginBottom: 15,
    },
    text: {
      color: "white",
      // fontFamily: 'Arial'
    },
    textBold: {
      color: "white",
      // fontFamily: 'Arial',
      fontWeight: 'bold',
    },
    doctorListing: {
      // padding: 10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      borderColor:'rgba(255, 255, 255, 0.2)',
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    callButton: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#FFF',
      // fontFamily: 'Arial',
      alignSelf: 'center',
      padding: 5,
    },
    touchCallButton: {
    },
    listingView: {
      backgroundColor: '#2196f3',
      width:320,
      borderRadius: 5,
      padding: 10,
      flexDirection: 'row',
    },
    left: {
      flex: 0.9,
    },
    right: {
      flexDirection: 'row',
      flex: 0.1,
      alignSelf: 'center',
    },
    star: {
      color: 'orange',
    },
    angle: {
      color: 'rgba(255, 255, 255, 0.2)',
    },
    touchHighlightRow: {
      flex: 0.7,
      // marginRight: 10,
       marginLeft :'6%',
    },
    flex: {
      flex: 1,
    },
    footer: {
      // flex: 0.1,
      alignSelf: 'stretch',
    },
    profileButton: {
      height: 55,
      width:200,
      backgroundColor: '#2286c3',
      paddingLeft: 30,
      paddingRight: 30,
      left:60,
      borderColor: 'black',
      borderWidth: 1,
      // right:'100%'
      // justifyContent: 'center',
    },
    profileButton1: {
      height: 55,
      width:200,
      backgroundColor: '#2286c3',
      paddingLeft: 30,
      paddingRight: 30,
      borderColor: 'black',
      borderWidth: 1,
      // left:'20%'
      right:340
      // justifyContent: 'center',
    },
    profileButtonText: {
      fontSize: 16,
      color: '#FFF',
      textAlign:'center',
      alignSelf: 'center',
      marginTop:'12%'
      // fontFamily: 'Arial'
    },
    cnacel:{
      width:50,
        height:50
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
    },
  });