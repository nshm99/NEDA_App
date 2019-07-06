import React from 'react';
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
        // marginBott1om: 40,
        paddingBottom : '5%',
        alignItems: 'center',
        justifyContent:'center',
        // flexDirection :'row',
      },
      searchBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        padding :'2%',
        marginLeft : "15%",
        color: 'white',
        backgroundColor: '#aebfbe',
        alignItems :'center',
        justifyContent :'space-between',
        textAlign :'center',
        width :'120%',
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
        height : 200,
        // marginBottom: '25%',
        marginLeft : '10%',
        paddingBottom : '5%'
      },
      text: {
        color: "white",
      },
      textBold: {
        color: "white",
        fontWeight: 'bold',
      },
      doctorListing: {
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
         marginLeft :'6%',
      },
      flex: {
        flex: 1,
      },
      footer: {
        alignSelf: 'stretch',
      },
      profileButton: {
        height: 55,
        width:'80%',
        backgroundColor: '#2286c3',
        marginLeft:'60%',
        marginTop : '-8%',
        left:60,
        borderColor: 'black',
        borderWidth: 1,
      },
      profileButton1: {
        height: 55,
        width:'160%',
        backgroundColor: '#2286c3',
        marginLeft:'70%',
        marginTop : '-8%',
        borderColor: 'black',
        borderWidth: 1,
        right:340
      },
      profileButtonText: {
        fontSize: 16,
        color: '#FFF',
        textAlign:'center',
        alignSelf: 'center',
        marginTop:'5%'
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
      },
      searchbutton:{
        backgroundColor: '#90caf9',
        width : '30%',
        height :'5%',
        marginLeft : '35%',
        marginRight :'10%',
        justifyContent :'center',
        borderRadius : 20,
        marginBottom : '7%',
      },
      exitButton:{
        marginTop : "-8%",
        marginLeft:'90%',
        width:'5%',
        height:'5%'
      },
      exitButtonIcon:{
        width: 25,
        height: 25
      }
    });