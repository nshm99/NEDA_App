import{StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
      backgroundColor : "blue"
    },
    header:{
      backgroundColor: "#1e88e5",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
      marginBottom : '20%',

    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: '#90caf9',
    },
    bg: {
          paddingTop: 30,
          width: null,
          height: null,
          resizeMode :'cover',
          backgroundColor :'rgba(0,0,0,1)',
        },
        menuContent: {
          color: "#000",
          fontWeight: "bold",
          padding: 2,
          fontSize: 20
        },
        headerText: {
          fontSize: 20,
          margin: 10,
          fontWeight: "bold",
          
        },
        button :{
          backgroundColor :"#81d4fa",
          borderRadius : 10,
          marginTop :'6%',
          marginRight :'5%',
          width : '85%',
          alignSelf : 'flex-end',
          padding:'2%',
          alignItems: 'center',
          textAlign :'right',
  
          
        },
        calendar:{
          width : '100%'
        },
        timebutton:{
          paddingBottom : "2%",
          justifyContent : "space-between",
          backgroundColor : '#c3fdff',
          borderRadius : 10,
          marginTop :15,
          marginBottom : 15,
          width : 160,
          height : 30,
          alignSelf : 'flex-end',
          padding:'2%',
          alignItems: 'center',
          
          
        },
        headerIconView: {
          marginLeft: 10,
          backgroundColor: 'transparent'
        },
        headerBackButtonView: {
          width: 25,
          height: 25,
          marginTop : '5%'
        },
        queue:{
            height : '40%',
            marginRight :'20%',
            marginLeft :'23%',
            marginBottom : '10%',
            marginTop :'10%',
            
        },
        people:{
            width : '80%',
            justifyContent : 'center',
            backgroundColor : '#81d4fa',
            // borderRadius : 10,
            marginBottom : '5%',
            textAlign : 'center',
            // height : '20%',
        },
        cnacel:{
            width : '40%',
            backgroundColor : '#2196f3',
            marginBottom : '5%',
            borderRadius  : 10,
            marginRight :'15%',
            marginLeft :'28%',
            alignItems :'center',
            
        },
        backButtonIcon: {
          width: 25,
          height: 25
        },
        headerContainer: {
          flex: 1,
        },
  });
   