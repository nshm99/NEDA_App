import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import styles from './login.style';

const background = require("./BG2.jpg");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class LoginScreen extends React.Component {
  state = {
    UserName : "",
    Password : "",
  }

  LoginHandler =async () =>{
    const url = "https://nedabackend.pythonanywhere.com/get_token/";
    const options= {
      mode:"cors",
      method: 'POST',
      body:JSON.stringify({
        username:this.state.UserName,
        password:this.state.Password
      }),
      
      headers: {
        "Content-type": "application/json"
      }
      }
      let response = null
      try{
      response = await fetch(url,options)
      }
      catch(error){
        console.log(error)
      }
      // console.log(response.status)
      if (response.status >= 200 && response.status < 300){
        this.props.navigation.navigate('Home',{param : response})
    } else{
        this.WrongPassUserAlert()
    }
  }
  WrongPassUserAlert = () => {
    Alert.alert(
      'شناسه کاربری یا رمز عبور اشتباه است',
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

  render() {
    const{UserName,Password}=this.state
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{ opacity: 0.7 }}
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
           blurRadius={1.5}
        >
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="نام کاربری" 
                placeholderTextColor="#FFF"
                style={styles.input} 
                value = {UserName}
                onChangeText = {(username) => this.setState({UserName : username})}
              />
            </View>

            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#FFF"
                placeholder="رمز عبور" 
                style={styles.input} 
                secureTextEntry
                value={Password}
                onChangeText = {(pw) => this.setState({Password : pw})}
              />
            </View>

            <TouchableOpacity 
              activeOpacity={.5}
              opacity={10000}
              onPress={() => this.LoginHandler()}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText} onpress>ورود</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <TouchableOpacity 
                activeOpacity={.5} 
                onPress = {() => this.props.navigation.navigate('SignUp')}
              >
                <View>
                  <Text style={styles.signupLinkText}>ایجاد حساب جدید  </Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.accountText}>  حساب کاربری ندارید؟</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

