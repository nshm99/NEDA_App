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
    WorkStart : "",
    WorkFinish : "",
    VisitDuring : "",
    checked : false,
    checked1 : false,
    checked2 : false,
    checked3 : false,
    checked4 : false,
    checked5 : false,
    checked6 : false,
    showHour : false,
  }
  WorkingHour = () =>{
    this.setState({showHour : true})
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
  ShowTimes = () =>{
    const{workfinish,workstart,visitduring} = this.state
    return(
      <View style={{ flexDirection: 'column'}}>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={{marginTop: 15}}>شنبه</Text>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked1}
                onPress={() => this.setState({ checked1: !this.state.checked1 })}
              />
              <Text style={{marginTop: 15}}>یک شنبه</Text>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked2}
                onPress={() => this.setState({ checked2: !this.state.checked2 })}
              />
              <Text style={{marginTop: 15}}>دو شنبه</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked3}
                onPress={() => this.setState({ checked3: !this.state.checked3 })}
              />
              <Text style={{marginTop: 15}}>سه شنبه</Text>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked4}
                onPress={() => this.setState({ checked4: !this.state.checked4 })}
              />
              <Text style={{marginTop: 15}}>چهار شنبه</Text>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked5}
                onPress={() => this.setState({ checked5: !this.state.checked5 })}
              />
              <Text style={{marginTop: 15}}>پنج شنبه</Text>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked6}
                onPress={() => this.setState({ checked6: !this.state.checked6 })}
              />
              <Text style={{marginTop: 15}}>جمعه</Text>
            </View>
            <View style = {styles.inputcontain}>
              <TextInput
                  style={[styles.input, styles.BlueFont]}
                  placeholder="ساعت شروع کار"
                  placeholderTextColor="#D8D8D8"
                  alignItems="center"
                  underlineColorAndroid='transparent' 
                  marginTop = '5%'
                  // marginLeft = '10%'
                  value={workstart}
                  onChangeText = {(workstart) => this.setState({WorkStart : workstart})}
                />
                <TextInput
                  style={[styles.input, styles.BlueFont]}
                  placeholder="ساعت پایان کار"
                  placeholderTextColor="#D8D8D8"
                  alignItems="center"
                  underlineColorAndroid='transparent' 
                  marginTop = '5%'
                  // marginLeft = '70%'
                  value={workfinish}
                  onChangeText = {(workfinish) => this.setState({WorkFinish : workfinish})}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.BlueFont]}
                  placeholder="مدت زمان تقریبی ویزیت هر بیمار"
                  placeholderTextColor="#D8D8D8"
                  alignItems="center"
                  underlineColorAndroid='transparent' 
                  marginTop = '5%'
                  value={visitduring}
                  onChangeText = {(visitduring) => this.setState({VisitDuring : visitduring})}
                />
              </View>
              <View >
                <TouchableOpacity activeOpacity={.5} opacity={10000}
                onPress={() => this.ClinicAdd()} 
                style={styles.button}
                >
                  <Text style={styles.buttonText} >ثبت</Text>
                </TouchableOpacity>
              </View>
          </View>
    );
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
                onPress={() => this.WorkingHour()} 
                style={styles.button}
                >
                  <Text style={styles.buttonText} >اضافه کردن زمان کاری</Text>
                </TouchableOpacity>
              </View>
              <View>
                {this.state.showHour ?  this.ShowTimes() : null}
              </View>
            </View>
          </ScrollView>
          
        </ImageBackground>
      </View>
    );
  }
} 