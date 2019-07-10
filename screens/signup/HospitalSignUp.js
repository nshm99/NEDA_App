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

import styles from'./Hospital.style'

const background = require("./BG2.jpg");
const backIcon = require("./back.png");

export default class SignupVriew extends Component {
  state = {
    Name : "",
    UserName : "",
    Password : "",
    PhoneNumber : "",
    Address : "",
    PostCode : "",
    Email : "",
    Province : ""
  }
  
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
                <Text style={styles.titleViewText}>Signing Up As Hospital </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.BlueFont]}
                  placeholder="Name"
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
                  placeholder="Address System Number"
                  placeholderTextColor="#D8D8D8"
                  alignItems="center"
                  underlineColorAndroid='transparent' 
                  marginTop = '5%'
                  value={address}
                  onChangeText = {(address) => this.setState({Address : address})}
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

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.BlueFont]}
                  placeholder="Province"
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
                  placeholder="post code"
                  placeholderTextColor="#D8D8D8"
                  alignItems="center"
                  underlineColorAndroid='transparent' 
                  marginTop = '5%'
                  value={postcode}
                  onChangeText = {(postcode) => this.setState({PostCode : postcode})}
                />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity activeOpacity={.5} opacity={10000}>
            <View style={styles.button}>
              <Text style={styles.buttonText} >Submit</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}