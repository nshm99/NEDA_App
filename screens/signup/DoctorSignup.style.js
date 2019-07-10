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
     footerContainer: {
        flex: 1
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
        borderBottomColor: '#baffff',
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
     },
     buttonText: {
        color: "#FFF",
        fontSize: 18,
     },
   })
  