
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ListItem,
  Modal,
  Picker,
  Alert,
  ActivityIndicator
} from 'react-native';

import Stars from 'react-native-stars';
import CalendarPicker from 'react-native-calendar-picker';
import { ThemeConsumer } from 'react-native-elements';

const backIcon = require("./signup/back.png");
const background = require("./signup/BG2.jpg");

// import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu"

export default class Profile extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      offices :[],
      selectedOffice : "",
      selectedOfficeID : null,
      selectedStartDate: null,
      DoctorData : [],
      DoctorTime : [],
      PatientData : null,
      isloading : false,
      stars :0,
      patient :[],
      // selectedDate : null
    };
    this.onDateChange =this.onDateChange.bind(this);
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  TimeSplit = (time) =>{
    let result = time.split('T');
    return(
      <View  >
      <Text>
      {result[0]}    {result[1].slice(0,-1)}
      
      </Text>
      </View>
    );
  }

  componentWillMount = async () => {
    const docdata = this.props.navigation.getParam('param1');
    this.DoctorData = docdata
    const url = "https://nedabackend.pythonanywhere.com/clinics/?doctor="+this.DoctorData.medical_system_number;
    const options = {
      mode : 'cors',
      method : 'GET',
      headers : {
        'content-type' : 'application/json'
      }
    }
    let response = null
    try{
      response = await fetch(url,options)
      this.setState({offices : JSON.parse(response["_bodyInit"])})
    }
    catch(error){
      console.log(error)
    }
  }
  TimeHandler = async (id) => {
    const url = "https://nedabackend.pythonanywhere.com/appointment_times/?clinic=" + id
    // console.log(url)
    const options= {
      mode:"cors",
      method: 'GET',
      headers: {
        "Content-type": "application/json"
      }
    }
    let response = null
    try{
      response = await fetch(url,options)
      this.setState({DoctorTime : JSON.parse(response["_bodyInit"])})
    }catch(error){
      console.log(error)
    }
  }
  

  ShowButton = (item) =>
  {
    return(
      <TouchableOpacity
      key ={item.id}
      style = {styles.timebutton}
      onPress = {() => this.AcceptTimeReservation(item.id)}
      >
        <View>
          {item.has_reserved ? null :  this.TimeSplit(item.date_time)}
          
          {/* {item.date_time} */}
          {/* {"\n"} */}
          {/* {dateTime[0 ]} */}
          
        </View>
      </TouchableOpacity>
    );
  }



  AcceptTimeReservation = async (id) => {
    Alert.alert(
      'رزرو وقت',
      'آیا می خواهید همین وقت را رزرو کنید؟',
      [
        {
          text: 'خیر',
          onPress: () => this.ReserveTime(),
          style: 'cancel',
        },
        {text: 'بله', onPress: () => this.ReserveTime(id)},
      ],
      {cancelable: false},
    );
  }
  ReserveTime = async (id) => {
    const url = "https://nedabackend.pythonanywhere.com/appointment_times/" + id + "/"
    console.log(url)
    const PatientData = this.props.navigation.getParam('param2');
    const PatientToken = JSON.parse(PatientData["_bodyInit"]).token
    const options ={
      mode:'cors',
      method:'PUT',
      body:JSON.stringify({
        has_reserved : true,
      }),
      headers : {
        "Content-type": "application/json",
        "Authorization" : "Token " + PatientToken
      }
    }
    let response = null
    try{
    response = await fetch(url,options)
    }
    catch(error){
      console.log(error)
    }
    console.log(response)
    if (response.status >= 200 && response.status < 300){
      this.AcceptAlert()
  }
}
  AcceptAlert = () => {
    Alert.alert(
      'وقت شما با موفقیت رزرو شد',
      '',
      [
        {
          text: 'باشه',
          onPress: () => console.log('ok'),
          style: 'ok',
        },
      ],
      {cancelable: false},
    );
  }
  Rate = async() =>{
    const PatientData = this.props.navigation.getParam('param2');
    const PatientToken = JSON.parse(PatientData["_bodyInit"]).token
     fetch('http://nedabackend.pythonanywhere.com/patients/', {
      mode: "cors",
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Token " + PatientToken
        
      }
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        patient: json
      });
      }); 
    const url = "https://nedabackend.pythonanywhere.com/doctor_rates/";
    const docdata = this.props.navigation.getParam('param1');
    console.log("+++++++++++++++++++++++++++++")
    console.log(docdata.medical_system_number)
    console.log("+++++++++++++++++++++++++++++")
    const options= {
      mode:"cors",
      method: 'POST',
      body:JSON.stringify({
        doctor : docdata.medical_system_number,
        patient : this.state.patient.social_number,
        rate : this.state.stars,
       
      }),
      
      headers: {
        "Content-type": "application/json",
        "Authorization" : "Token " + PatientToken
      }
      }
      let response = null
      try{
      response = await fetch(url,options)
      console.log(response)
      }
      catch(error){
        console.log(error)
      }
      if (response.status >= 200 && response.status < 300){
        this.props.navigation.navigate('Home',{response})
    } 
  }
  render() {
    const doctorinfo = this.DoctorData
    let dateTime = []
    return (
      <ScrollView >
          
            <View style={styles.header}>
            <TouchableOpacity style={styles.headerBackButtonView}
            //  onPress = {() => this.props.navigation.navigate('Home')}
            onPress ={() => this.Rate()}
             >
              <Image 
                source={backIcon} 
                style={styles.backButtonIcon} 
                resizeMode="contain"
                />
            </TouchableOpacity>
            </View>
            <Image style={styles.avatar} source={{uri: doctorinfo.picture}}/>
            
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{doctorinfo.user.first_name} {doctorinfo.user.lastname}</Text>
                <Text style={styles.info}>{doctorinfo.expertise}</Text>
                <Text style={styles.description}>{doctorinfo.user.bio}</Text>
                <View style={{alignItems:'center'}}>
          <Stars
            half={true}
            default={2.5}
            update={(val)=>{this.setState({stars: val})}}
            spacing={4}
            starSize={40}
            count={5}
            fullStar={require('./starFilled.png')}
            emptyStar={require('./starEmpty.png')}
            halfStar={require('./starHalf.png')}/>
        </View>
               </View>
          </View>
          <View style = {{flexDirection :'row',margin : 10}}>
                <View style = {{flexDirection :'column'}}>
                <CalendarPicker style = {styles.calendar} width = {300} 
                onDateChange={this.onDateChange}
                ></CalendarPicker> 
                </View>
                 <View style = {{marginTop :'7%'}}>
                  {this.state.offices.map((item) => (
                      <TouchableOpacity
                        key = {item.id}
                        style = {styles.button}
                        onPress = { () => {this.setState({selectedOffice : item.name
                        , selectedOfficeID : item.id,isloading:true})}}  >
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    ))
                  }
                </View> 
          </View>
          <View style = {{alignItems :'center'}}>
          <Text style = {styles.info}>
            {this.state.offices[this.state.selectedOfficeID] ? this.state.offices.id : this.state.offices.name}
          </Text>
          {
          
            this.state.isloading?(<TouchableOpacity style={styles.headerBackButtonView}
              onPress = {() => this.TimeHandler(this.state.selectedOfficeID)}
              style={{backgroundColor : '#81d4fa', width:'40%',textAlign:'center',borderRadius:10,marginBottom : '10%'}}
              >
               <Text style={{color:'white',textAlign:'center'}}>وقت های آزاد</Text>
           </TouchableOpacity>):<ActivityIndicator size = 'large'
                color = "blue"/>
          }
          <ScrollView>
            {
              this.state.DoctorTime.map((item) => 
              (
                <View>
                  {item.has_reserved ? null :  this.ShowButton(item)}
                </View>
              )
            )
            }
          </ScrollView>
          
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
      backButtonIcon: {
        width: 25,
        height: 25
      },
      headerContainer: {
        flex: 1,
      },
});
 
