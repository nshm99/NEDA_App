import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native'

import styles from'./signup/PatientSignUp.style';
import { FlatList } from 'react-native-gesture-handler';
import patientProfile from './patientProfile';
import { ThemeConsumer } from 'react-native-elements';

const background = require("./login/BG2.jpg");
const backIcon = require("./back.png");

export default class patientSignUp extends Component 
{
  state = {
    UserToken : this.props.navigation.getParam('param1'),
    patient : [],
    // Name : "",
    // LastName : "",
    // UserName : "",
    // Email :"",
    // Password : "",
    // SocialNumber : "",
    // PhoneNumber : "",
    // Gender : "",
    Name : [],
    LastName : [],
    UserName : [],
    Email :[],
    Password : [],
    SocialNumber : [],
    PhoneNumber : [],
    Gender : [],
  }
  componentWillMount = async () => {
    const PatientToken = JSON.parse(this.state.UserToken["_bodyInit"]).token
    return fetch('http://nedabackend.pythonanywhere.com/patients/', {
      mode: "cors",
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Token " + PatientToken
        
      }
    }).then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      console.log("\n")
      this.setState({
        patient: json,
        Name : json[0].user.first_name,
        LastName : json[0].user.last_name,
        UserName : json[0].user.username,
        Email :json[0].user.email,
        Password : json[0].user.password,
        SocialNumber : json[0].social_number,
        PhoneNumber : json[0].mobile_number,
        Gender : json[0].gender,
      });
      });
  }
  ChangeAlert = async (id) => {
    Alert.alert(
      'ویرایش پروفایل',
      'تغییرات داده شده ذخیره شود؟',
      [
        {
          text: 'خیر',
          onPress: () => console.log('No'),
          style: 'cancel',
        },
        {text: 'بله', onPress: () => this.PatientSignUpHandler()},
      ],
      {cancelable: false},
    );
  }
  PatientSignUpHandler =async () =>{  
    const PatientToken = JSON.parse(this.state.UserToken["_bodyInit"]).token
    console.log(PatientToken)
    console.log("\n")
    const url = 'http://nedabackend.pythonanywhere.com/patients/'+this.state.patient[0].social_number+'/';
    const options= {
      mode:"cors",
      method: 'PUT',
      body:JSON.stringify({
        address : this.state.patient[0].address,
        date_of_birth :this.state.patient[0].date_of_birth,
        phone_number: this.state.patient[0].phone_number,
        // picture : this.state.patient[0].picture,
        is_patient:true,
        is_doctor:false,
        is_hospital:false,
        social_number:this.state.SocialNumber,
        mobile_number:this.state.PhoneNumber,
        gender:this.state.Gender,
        url : this.state.patient[0].url,
        user : {
          username:this.state.UserName,
          email : this.state.Email,
          password:this.state.Password,
          first_name:this.state.Name,
          last_name:this.state.LastName,
          province :this.state.patient[0].user.province,
          url : this.state.patient[0].user.url,
        },
        wallet : this.state.patient[0].wallet,
        // username:this.state.patient.user.username,
        //   email : this.state.patient.user.email,
        //   password:this.state.patient.user.Password,
        //   first_name:this.state.patient.user.first_name,
        //   last_name:this.state.patient.user.last_name,
        //   social_number:this.state.patient.social_number,
        //   mobile_number:this.state.patient.mobile_number,
        //   gender:this.state.patient.gender
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
        this.props.navigation.navigate('patientProfile')
    }
  }
  render(){
    const{name,lastname,username,email,password,socialnumber,phonenumber,gender}=this.state
    return (
        
        <View style={styles.container}>
            
          <ImageBackground
            imageStyle={{ opacity: 0.7 }}
            source={background} 
            style={[styles.container, styles.bg]}
            resizeMode="cover"
            blurRadius={1.5}
            >          
          {
            ( this.state.patient.length !== 0)?(
            <ScrollView>
              <View style={styles.headerIconView}>
                <TouchableOpacity style={styles.headerBackButtonView}  >
                  <Image 
                    source={backIcon} 
                    style={styles.backButtonIcon} 
                    resizeMode="contain"
                    />
                </TouchableOpacity>
              </View>

              <View style={styles.headerContainer}>
                <View style={styles.headerTitleView}>
                  <Text style={styles.titleViewText}>Edit profile </Text>
                </View>

                {
                  this.state.Name.length !== 0?(
                <View style={styles.inputContainer}>
                  <TextInput
                      style={[styles.input, styles.BlueFont]}
                      placeholder={this.state.patient[0].user.first_name}
                      placeholderTextColor="#D8D8D8"
                      underlineColorAndroid='transparent' 
                      marginTop = '5%'
                      value={name}
                      onChangeText = {(name) => this.setState({Name : name})}
                  />
                </View>
                  ):null
                }

                {
                  this.state.LastName.length !== 0?(
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder={this.state.patient[0].user.last_name}
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={lastname}
                    onChangeText = {(lastname) => this.setState({LastName : lastname})}
                  />
                </View>
            ):null
              }

                {
                  this.state.UserName.length !== 0?(
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder={this.state.patient[0].user.username}
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={username}
                    onChangeText = {(username) => this.setState({UserName : username})}
                  />
                </View>
            ):null
              }

                {
                  this.state.Email.length !== 0?(
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder={this.state.patient[0].user.email}
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={email}
                    onChangeText = {(email) => this.setState({Email : email})}
                  />
                </View>
            ):null
              }

                {
                  this.state.Password.length !== 0?(
                <View style={styles.inputContainer}>
                  <TextInput
                    secureTextEntry={true}
                    style={[styles.input, styles.BlueFont]}
                    placeholder="Password"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={password}
                    onChangeText = {(password) => this.setState({Password : password})}
                  />
                </View>
            ):null
              }

                {
                  this.state.SocialNumber.length !== 0?(
                <View style={styles.inputContainer}>
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    style={[styles.input, styles.BlueFont]}
                    placeholder={this.state.patient[0].social_number}
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={socialnumber}
                    onChangeText = {(socialnumber) => this.setState({SocialNumber : socialnumber})}
                  />
                </View>
            ):null
              }

                {
                  this.state.PhoneNumber.length !== 0?(
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder={this.state.patient[0].mobile_number}
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={phonenumber}
                    onChangeText = {(phonenumber) => this.setState({PhoneNumber : phonenumber})}
                  />
                </View>
            ):null
              }
                {
                  this.state.Gender.length !== 0?(
                <View style ={styles.inputContainer}>
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    style={[styles.input, styles.BlueFont]}
                    placeholder={this.state.patient[0].gender}
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={gender}
                    onChangeText = {(gender) => this.setState({Gender : gender})}
                  />
                </View>
            ):null
              }
              </View>

              <TouchableOpacity activeOpacity={.5} opacity={10000}
                  onPress={() => this.PatientSignUpHandler()}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText} >ثبت تغییرات</Text>
                  </View>
              </TouchableOpacity>
            </ScrollView>
      ):<ActivityIndicator size = 'large'
      color = "blue"/>
          }
      </ImageBackground>
        </View>    
      );
    }
  } 

 