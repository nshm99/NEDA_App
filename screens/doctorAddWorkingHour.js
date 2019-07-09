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
    Docotr : this.props.navigation.getParam('param2'),
    IsPressed : false,
    Clinics :[],
    WorkStart : "",
    WorkFinish : "",
    VisitDuring : 0,
    checked : false,
    checked1 : false,
    checked2 : false,
    checked3 : false,
    checked4 : false,
    checked5 : false,
    checked6 : false,
    showHour : false,
    day :"",
    price :0,
    clinicID :0,
  }

  componentWillMount = async()=>{
    const url = "https://nedabackend.pythonanywhere.com/clinics/?province=&doctor="+this.state.Docotr[0].medical_system_number; 
    const options = {
        mode : 'cors',
        method :'GET',
        headers : {
          'content-type' : 'application/json'
        }   
        
      }
      let response = null
      try{
        response =await fetch(url,options)
        this.setState({Clinics : JSON.parse(response["_bodyInit"])})
        
      }
      catch(error){
        console.log(error)
      }
    //   console.log(response)

  }


  WorkingHour = async() =>{


    const url = "https://nedabackend.pythonanywhere.com/working_hours/";
    const DoctorToken = JSON.parse(this.state.UserToken["_bodyInit"]).token
    console.log(this.state.WorkStart)
    console.log("\n")
    const options= {
      mode:"cors",
      method: 'POST',
      body:JSON.stringify({
        day : this.state.day,
    WorkStart : "",
        start : this.state.WorkStart,
        end : this.state.WorkFinish,
        period : this.state.VisitDuring,
        price : this.state.price,
        clinic : this.state.clinicID,
        hospital : null,
        Docotr : this.state.Docotr.medical_system_number,
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


    this.setState({WorkStart : "",
    WorkFinish : "",
    VisitDuring : "",
    price :0,})
  }

  render() {
    const{workfinish,workstart,visitduring,price} = this.state
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
            {
                this.state.Clinics.length !==0 ?
                ( 
                  this.state.Clinics.map((item, index) =>{
                    return ( 
                      <TouchableOpacity activeOpacity={.5} opacity={10000}
                      onPress={() => this.setState({IsPressed : true, clinicID:item.id})} 
                      style={styles.submitbutton}
                      >
                        <Text style={styles.submitbuttonText} >{item.name}</Text>
                      </TouchableOpacity>
                    )
                  }
                )
                ):null
            }
            {
              this.state.IsPressed ?(
                <View >
            <View style = {{flexDirection : "row", marginLeft:"80%"} }>
            <Text style={{marginTop: 15}}>شنبه</Text>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked,day :"شنبه" })}
            />
            </View>
            {
              this.state.checked?(
                <View>
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
                    placeholder="هزینه ویزیت"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    // marginLeft = '10%'
                    value={price}
                    onChangeText = {(price) => this.setState({price : price})}
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
              onPress={() => this.WorkingHour()} 
              style={styles.submitbutton}
              >
                <Text style={styles.submitbuttonText} >ثبت</Text>
              </TouchableOpacity>
            </View>
                </View>
              ):null
            }
            
            <View style = {{flexDirection : "row", marginLeft:"75.24%"} }>
            <Text style={{marginTop: 15}}>یک شنبه</Text>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked1}
              onPress={() => this.setState({ checked1: !this.state.checked1,day :"یکشنبه" })}
            />
            </View>
            {
              this.state.checked1?(
                <View>
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
                    placeholder="هزینه ویزیت"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    // marginLeft = '10%'
                    value={price}
                    onChangeText = {(price) => this.setState({price : price})}
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
              onPress={() => this.WorkingHour()} 
              style={styles.submitbutton}
              >
                <Text style={styles.submitbuttonText} >ثبت</Text>
              </TouchableOpacity>
            </View>
                </View>
              ):null
            }
            <View style = {{flexDirection : "row", marginLeft:"75.5%"} }>
            <Text style={{marginTop: 15}}>دو شنبه</Text>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked2}
              onPress={() => this.setState({ checked2: !this.state.checked2 ,day :"دوشنبه"})}
              />
            </View>
            {
              this.state.checked2?(
                <View>
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
                    placeholder="هزینه ویزیت"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    // marginLeft = '10%'
                    value={price}
                    onChangeText = {(price) => this.setState({price : price})}
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
              onPress={() => this.WorkingHour()} 
              style={styles.submitbutton}
              >
                <Text style={styles.submitbuttonText} >ثبت</Text>
              </TouchableOpacity>
            </View>
                </View>
              ):null
            }
            <View style = {{flexDirection : "row", marginLeft:"75.24%"} }>
            <Text style={{marginTop: 15}}>سه شنبه</Text>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked3}
              onPress={() => this.setState({ checked3: !this.state.checked3 ,day :"سه شنبه"})}
              />
            </View>
            {
              this.state.checked3?(
                <View>
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
                    placeholder="هزینه ویزیت"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    // marginLeft = '10%'
                    value={price}
                    onChangeText = {(price) => this.setState({price : price})}
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
              onPress={() => this.WorkingHour()} 
              style={styles.submitbutton}
              >
                <Text style={styles.submitbuttonText} >ثبت</Text>
              </TouchableOpacity>
            </View>
                </View>
              ):null
            }
            <View style = {{flexDirection : "row", marginLeft:"73%"} }>
            <Text style={{marginTop: 15}}>چهار شنبه</Text>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked4}
              onPress={() => this.setState({ checked4: !this.state.checked4 ,day :"چهارشنبه"})}
              />
            </View>
            {
              this.state.checked4?(
                <View>
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
                    placeholder="هزینه ویزیت"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    // marginLeft = '10%'
                    value={price}
                    onChangeText = {(price) => this.setState({price : price})}
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
              onPress={() => this.WorkingHour()} 
              style={styles.submitbutton}
              >
                <Text style={styles.submitbuttonText} >ثبت</Text>
              </TouchableOpacity>
            </View>
                </View>
              ):null
            }
            <View style = {{flexDirection : "row", marginLeft:"74%"} }>
            <Text style={{marginTop: 15}}>پنج شنبه</Text>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked5}
              onPress={() => this.setState({ checked5: !this.state.checked5 ,day :"پنج شنبه"})}
              />
            </View>
            {
              this.state.checked5?(
                <View>
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
                    placeholder="هزینه ویزیت"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    // marginLeft = '10%'
                    value={price}
                    onChangeText = {(price) => this.setState({price : price})}
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
              onPress={() => this.WorkingHour()} 
              style={styles.submitbutton}
              >
                <Text style={styles.submitbuttonText} >ثبت</Text>
              </TouchableOpacity>
            </View>
                </View>
              ):null
            }
            <View style = {{flexDirection : "row", marginLeft:"78%"} }>
            <Text style={{marginTop: 15}}>جمعه</Text>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked6}
              onPress={() => this.setState({ checked6: !this.state.checked6,day :"جمعه" })}
              />
            </View>
            {
              this.state.checked6?(
                <View>
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
                    placeholder="هزینه ویزیت"
                    placeholderTextColor="#D8D8D8"
                    alignItems="center"
                    underlineColorAndroid='transparent' 
                    marginTop = '5%'
                    // marginLeft = '10%'
                    value={price}
                    onChangeText = {(price) => this.setState({price : price})}
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
              onPress={() => this.WorkingHour()} 
              style={styles.submitbutton}
              >
                <Text style={styles.submitbuttonText} >ثبت</Text>
              </TouchableOpacity>
            </View>
                </View>
              ):null
            }
             </View>

              ):null
            }
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
} 