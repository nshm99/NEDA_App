
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Linking,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './patientProfileStyle';
import BottomNavigation,{
    FullTab
} from 'react-native-material-bottom-navigation';

const cross = require("./83972.png")

class Detail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      patient : [],
      clinic : [],
    };
  }

  componentWillMount =async ()=>{
    const url = 'http://nedabackend.pythonanywhere.com/patients/' + this.props.Doc.patient + '/'
    const options = {
      mode : 'cors',
      method : 'GET',
      headers : {
        'content-type' : 'application/json'
      }
    }
    let response = null
    try{
      response =await fetch(url,options)
      this.setState({patient : JSON.parse(response["_bodyInit"])})
    }
    catch(error){
      console.log(error)
    }

    const url2 = 'http://nedabackend.pythonanywhere.com/clinics/' + this.props.Doc.clinic + '/'
    let response2 = null
    try{
      response2 =await fetch(url2,options)
      this.setState({clinic : JSON.parse(response2["_bodyInit"])})
    }
    catch(error){
      console.log(error)
    }
  }
  cancel = async ()=>{
    const url = this.props.Doc.url
      const patientToken = JSON.parse(this.props.UserToken["_bodyInit"]).token
      console.log("\n")
      console.log("____________________________")
      console.log(patientToken)
      const options ={
      mode:'cors',
      method:'PUT',
      body:JSON.stringify({
        has_reserved : false,
      }),
      headers : {
        "Content-type": "application/json",
        "Authorization" : "Token " + patientToken
      }
    }
    let response = null
    try{
    response = await fetch(url,options)
    
    }
    catch(error){
      console.log(error)
    } 
  }
  render(){
    let splitedTime = this.props.Doc.date_time.split("T")
    return(
      <View>
        {
          this.state.patient.length !==0 ?(
            this.state.clinic.length !== 0?(
        <View
        // onPress = {() => this.props.navigation.navigate('AppointmentPage',{param1:item})}
        // key = {item.medical_system_number}
        style={{paddingBottom : '1%',paddingTop :'1%'}}
        >
          <View style={styles.touchHighlightRow}>
            <View style={styles.listingView}>
              <View style={styles.left}>
                <Text style={styles.textBold}>
                  {this.state.patient.user.first_name}   {this.state.patient.user.last_name}
                </Text>
                <Text>
                  {splitedTime[0]}  {splitedTime[1].slice(0,-1)}
                </Text>
                <Text>
                  {this.state.clinic.name}
                </Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.right}>
                  <Icon style={styles.angle} name="angle-double-left" size={50} color="rgba(255, 255, 255, 0.8)" />
                </Text>
              </View>
              <TouchableOpacity 
              style = {styles.cnacel}
              onPress = {() => this.cancel()}> 
              <Image 
                source={cross} 
                style ={{width:50,height:50}}
                resizeMode="contain"
                
              />
              </TouchableOpacity>
            </View>
          </View>
        </View>
            ):<ActivityIndicator size = 'large'
            color = "blue"/>
          ):<ActivityIndicator size = 'large'
          color = "blue"/>
        }
      </View>
    );
  }

}


class ShowDetail extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      time : []
    };
  }
  componentWillMount = async() =>{
    const url = "https://nedabackend.pythonanywhere.com/appointment_times/?date_time=&doctor="+this.props.Doctor.medical_system_number+"&patient=&clinic=&hospital="
    // const url = "https://nedabackend.pythonanywhere.com/appointment_times/?date_time=&doctor="+"ب967-22398"+"&patient=&clinic=&hospital="
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
          this.setState({time : JSON.parse(response["_bodyInit"])})
        }
        catch(error){
          console.log(error)
        }

  }
  render(){
    return(
      <View>
        {
          this.state.time.length !==0?(
            this.state.time.map((item) =>
              item.has_reserved?(
                <View>
                  <Detail Doc = {item} UserToken ={this.props.UserToken}/>
                </View>
              ):null
            )
          ):null
          
        }
      </View>
    );
  }
}
class Home extends React.Component {

    if(exit){
    this.props.navigation.navigate('Login');}
    constructor(props) {
      super(props);
  
      this.state = {
        UserToken : this.props.navigation.getParam('param1'),
        isLoading : false,
        doctor : [],
        lat: null,
        lng: null,
        activeTab :"",
        docs :[
          {
            name : "علی شفیعی",
            expert :"قلب و عروق",
            time :'8-10 sat',
            id : 2
          },
          {
            name : "علی احمدی",
            expert :"غدد",
            time :'8-10 sat',
            id : 2
          }
        ],
      };}
      
      componentWillMount = async() =>{
        const DoctorToken = JSON.parse(this.state.UserToken["_bodyInit"]).token
        return fetch("https://nedabackend.pythonanywhere.com/doctors/", {
          mode: "cors",
          method: 'GET',
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : "Token " + DoctorToken
            
          }
        }).then(response => {
          return response.json()
        }).then(json => {
           this.setState({
            doctor: json,
            isLoading : true
          });
        });
        }


      tabs = [
        {
          key: 'Home',
          icon: 'home',
          label: 'خانه',
          barColor: '#90caf9',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'PatientProfile',
          icon: 'home',
          label: 'پروفایل',
          barColor: '#4ba3c7',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'Clinics',
          icon: 'home',
          label: 'مراکز درمانی',
          barColor: '#67daff',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        }
      ]
      
      

      renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
      )
     
      renderTab = ({ tab, isActive }) => (
        <FullTab
          isActive={isActive}
          key={tab.key}
          label={tab.label}
          renderIcon={this.renderIcon(tab.icon)}
        />
      )
      render() {
        let docs;
        return (
          
          <ImageBackground source={require('./signup/BG2.jpg')} style={styles.container} blurRadius={1.5}>
            {
              // this.state.isLoading ?(
                this.state.doctor.length !== 0 ?(
            <View style={styles.container}>
              <View style={styles.searchBarContainer}>
              <TouchableOpacity
                  style={styles.searchBox}
                  placeholderTextColor='gray'
                  onPress={() => this.props.navigation.navigate('doctorEditCharacteristics',{param1 : this.state.UserToken})}
                >
                  <Text>
                    ویرایش پروفایل
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.searchBox}
                  placeholderTextColor='gray'
                  onPress={() => this.props.navigation.navigate('DoctorEditProfile',{param1 : this.state.UserToken})}
                >
                  <Text>
                    اضافه کردن مطب
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.searchBox}
                  placeholderTextColor='gray'
                  onPress={() => this.props.navigation.navigate('DoctorworkingHoire',
                  {param1 : this.state.UserToken,param2 : this.state.doctor})}
                >
                  <Text>
                    اضافه کردن زمان کاری
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.listingsContainer}>
                {docs}
              </ScrollView>
            
            <View style={styles.doctorListing}
            
               >
                 <ScrollView>
                   {
                     <View>
                        <ShowDetail Doctor ={this.state.doctor[0]} UserToken = {this.state.UserToken}/>
                     </View>
                   }
                 </ScrollView>
            </View>
                <BottomNavigation
                    style={styles.footer}
                    onTabPress = {newTab => this.props.navigation.navigate(newTab.key)}
                    // onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </View>
              ):<ActivityIndicator size = 'large'
              color = "blue"/>
            }
          </ImageBackground>
          
          
        );
      }
    }
    
    
    export default Home;
    