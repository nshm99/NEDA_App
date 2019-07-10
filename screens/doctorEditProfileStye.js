import{StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
     flex: 1,
     flexDirection: "column",
     justifyContent:"space-between",
      backgroundColor: 'rgba(0,0,0,1)'
     },
     bg: {
       width: null,
       height: null,
       resizeMode :'cover',
   },
     headerContainer: {
       flex: 1,
       alignItems : 'center'
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
       marginLeft: "1%",
       alignItems:'center',
       marginBottom : '20%'
     },
     titleViewText: {
       fontSize: 20,
       color: '#0069c0',
     },
     inputContainer: {
       borderWidth: 1,
      //  borderBottomColor: '#baffff',
       borderColor: 'transparent',
       flexDirection: 'row',
       height: 75,
       width:'70%',
       marginTop : "1%",
     },
     input: {
       flex: 1,
       fontSize: 20,
       textAlign : 'center',
        alignItems : 'center',
        // paddingLeft:'2%',
        // paddingRight : '2%'
     },
     BlueFont:{
       color : '#6ec6ff'
     },
     button: {
       backgroundColor: "#2196f3",
       paddingVertical: 20,
       alignItems: "center",
       justifyContent: "center",
       marginTop: 30,
      //  marginLeft :"5%",
      //  marginRight :"5%",
       width :"300%",
       borderRadius : 10,
       
     },
     buttonText: {
       color: "#FFF",
       fontSize: 18,
      //  margin : '1%',
       marginBottom:'1%',
       marginLeft:'1%',
       marginTop :'1%',
       marginRight :'1%',

     },
     submitbutton:{
      backgroundColor: "#2196f3",
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      marginLeft :"25%",
      marginRight :"5%",
      width :"20%",
      borderRadius : 10,

     },
     inputcontain:{
      backgroundColor: "#2196f3",
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      marginLeft :"35%",
      marginRight :"5%",
      width :"40%",
      borderRadius : 10,
     },
     workinput : {
       flex: 1,
      // marginLeft:'20%',
       fontSize: 20,
       textAlign : 'center',
        alignItems : 'center',
        width: '50%'
     },
     clinicbutton : {
      backgroundColor: "#2196f3",
      paddingVertical: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      marginLeft :"35%",
      marginBottom :"5%",
      width :"43%",
      height : "8%",
      borderRadius : 10,
     },
     submitbuttonText: {
      color: "#FFF",
      fontSize: 18,
     //  margin : '1%',
      marginBottom:'1%',
      marginLeft:'1%',
      marginTop :'1%',
      marginRight :'1%',

    },
   })
     
  