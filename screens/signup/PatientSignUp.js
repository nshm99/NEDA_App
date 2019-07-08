import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import styles from'./PatientSignUp.style';

const background = require("./BG2.jpg");
const backIcon = require("./back.png");

export default class patientSignUp extends Component 
{
  state = {
    Name : "",
    LastName : "",
    UserName : "",
    Password : "",
    SocialNumber : "",
    PhoneNumber : "",
    Gender : "",
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
                  <Text style={styles.titleViewText}>Signing Up As Patient </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                      style={[styles.input, styles.BlueFont]}
                      placeholder="Name"
                      placeholderTextColor="#D8D8D8"
                      underlineColorAndroid='transparent' 
                      marginTop = '5%'
                      value={name}
                      onChangeText = {(name) => this.setState({Name : name})}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder="Last Name"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={lastname}
                    onChangeText = {(lastname) => this.setState({LastName : lastname})}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder="UserName"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={username}
                    onChangeText = {(username) => this.setState({UserName : username})}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder="Email"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={email}
                    onChangeText = {(email) => this.setState({Email : email})}
                  />
                </View>

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

                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder="Social Number"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={socialnumber}
                    onChangeText = {(socialnumber) => this.setState({SocialNumber : socialnumber})}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder="Phone Number"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={phonenumber}
                    onChangeText = {(phonenumber) => this.setState({PhoneNumber : phonenumber})}
                  />
                </View>
                <View style ={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, styles.BlueFont]}
                    placeholder="Gender"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    value={gender}
                    onChangeText = {(gender) => this.setState({Gender : gender})}
                  />
                </View>
              </View>

              <TouchableOpacity activeOpacity={.5} opacity={10000}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText} >Submit</Text>
                  </View>
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </View>    
      );
    }
  } 

 