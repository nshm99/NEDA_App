import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import {CheckBox} from 'react-native-elements';
import styles from'./doctorEditProfileStye';
import { FlatList } from 'react-native-gesture-handler';

// const checked = require("../images/icons8-checked-checkbox-30.png")
const background = require("../screens/login/BG2.jpg");
const backIcon = require("./back.png");

export default class SignupVriew extends Component {
  state = {
    Name : "",
    UserToken : this.props.navigation.getParam('param1'),
    UserName : "",
    Password : "",
    PhoneNumber : "",
    Address : "",
    PostCode : "",
    Email : "",
    Province : "",
  }
  
  ClinicAdd = async () =>{
    const url = "https://nedabackend.pythonanywhere.com/clinics/";
    const DoctorToken = JSON.parse(this.state.UserToken["_bodyInit"]).token
    console.log(this.state.UserToken)
    console.log(DoctorToken)
    const options= {
      mode:"cors",
      method: 'POST',
      body:JSON.stringify({
        name : this.state.Name,
        address : this.state.Address,
        province : this.state.Province,
        phone_number : this.state.PhoneNumber,
      }),
      
      headers: {
        "Content-type": "application/json",
        "Authorization" : "Token " + DoctorToken
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
  

//   HospitalSignUpHandler =async () =>{
// const url = "https://nedabackend.pythonanywhere.com/users/";
//     const options= {
//       mode:"cors",
//       method: 'POST',
//       body:JSON.stringify({
//         is_patient:false,
//         is_doctor:false,
//         is_hospital:true,
//         username:this.state.UserName,
//         email : this.state.Email,
//         password:this.state.Password,
//         first_name:this.state.Name,
//         phone_number:this.state.PhoneNumber,
//         address:this.state.Address,
//         post_code:this.state.PostCode,
//         province : this.state.Province
//       }),
      
//       headers: {
//         "Content-type": "application/json"
//       }
//       }
//       let response = null
//       try{
//       response = await fetch(url,options)
//       console.log(response)
//       }
//       catch(error){
//         console.log(error)
//       }
//       if (response.status >= 200 && response.status < 300){
//         this.props.navigation.navigate('Home',{response})
//     }
//     }
  render() {
    const{name,username,email,password,phonenumber,address,postcode,province}=this.state
    return (      
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{ opacity: 0.7 }}
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
          blurRadius={1.5}
        >          
          <ScrollView>
           <View style={styles.headerIconView}>
              <TouchableOpacity style={styles.headerBackButtonView}>
                <Image 
                  source={backIcon} 
                  style={styles.backButtonIcon} 
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerContainer}>
              <View style={styles.headerTitleView}>
                <Text style={styles.titleViewText}>اضافه کردن مطب جدید</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.BlueFont]}
                  placeholder="نام"
                  placeholderTextColor="#D8D8D8"
                  alignItems="center"
                  underlineColorAndroid='transparent' 
                  marginTop = '5%'
                  value={name}
                  onChangeText = {(name) => this.setState({Name : name})}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.BlueFont]}
                  placeholder="شهر"
                  placeholderTextColor="#D8D8D8"
                  alignItems="center"
                  underlineColorAndroid='transparent' 
                  marginTop = '5%'
                  value={province}
                  onChangeText = {(province) => this.setState({Province : province})}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.BlueFont]}
                  placeholder="شماره تلفن"
                  placeholderTextColor="#D8D8D8"
                  alignItems="center"
                  underlineColorAndroid='transparent' 
                  marginTop = '5%'
                  value={phonenumber}
                  onChangeText = {(phonenumber) => this.setState({PhoneNumber : phonenumber})}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.BlueFont]}
                  placeholder="آدرس"
                  placeholderTextColor="#D8D8D8"
                  alignItems="center"
                  underlineColorAndroid='transparent' 
                  marginTop = '5%'
                  value={address}
                  onChangeText = {(address) => this.setState({Address : address})}
                />
              </View>  
              <View >
                <TouchableOpacity activeOpacity={.5} opacity={10000}
                onPress={() => this.ClinicAdd()} 
                style={styles.button}
                >
                  <Text style={styles.buttonText} >اضافه کردن مطب</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          
        </ImageBackground>
      </View>
    );
  }
} 