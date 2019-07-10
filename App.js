import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';
import LoginScreen from "./screens/login/index";
import SignupScreen from "./screens/signup/index";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Docprof from './screens/DoctorPage';
import Homepage from './screens/Home';
import PatientProf from'./screens/patientProfile';
import DoctorSignUp from './screens/signup/DoctorSignUp';
import PatientSignUp from './screens/signup/PatientSignUp';
import HospitalSignup from './screens/signup/HospitalSignUp';
import AppoinmentDetail from './screens/Appoinment';
import profileDoctor from'./screens/doctorProfile';
import DoctorEditProfile from './screens/doctorEditProfile';
import sidebarmenu from './screens/SideMenu';
import PatientEditCharacteristics from './screens/PatientEditCharacteristics';
import doctorEditCharacteristics from './screens/doctorEditCharacteristics';
import doctorWorkingHour from './screens/doctorAddWorkingHour';

const RouteStack = createStackNavigator({
  Login : {
    screen : LoginScreen,
    navigationOptions: {
      header: null 
    },
  },
  SignUp : {
    screen : SignupScreen,
    navigationOptions: {
      header: null 
    },
  },
  Home : {
    screen : Homepage,
    navigationOptions:{
      header : null
    },
  },
  DoctorProfile :{
    screen : Docprof,
    navigationOptions:{
      header : null
    },
  },
  patientProfile :{
    screen : PatientProf,
    navigationOptions :{
      header : null
    }
  },
  DoctorSignupPage :{
    screen : DoctorSignUp,
    navigationOptions :{
      header : null,
    },
  },
  PatientSignupPage : {
    screen : PatientSignUp,
    navigationOptions :{
      header : null,
    },
  },
  HospitalSignupPage : {
    screen : HospitalSignup,
    navigationOptions : {
      header : null,
    },
  },
 
  AppointmentPage : {
    screen : AppoinmentDetail,
    navigationOptions : {
      header : null,
    },
  },

  doctorProfile : {
    screen : profileDoctor,
    navigationOptions : {
      header : null,
    },
  },

  PatientEditCharacteristics :{
    screen : PatientEditCharacteristics,
    navigationOptions : {
      header : null,
    },
  },
  doctorEditCharacteristics :{
    screen :doctorEditCharacteristics,
    navigationOptions : {
      header : null,
    },
  },
  DoctorEditProfile:{
    screen: DoctorEditProfile,
    navigationOptions : {
      header : null,
    },

  },
  DoctorworkingHoire :{
    screen : doctorWorkingHour,
    navigationOptions : {
      header : null,
    },
  },
  
  SideMenu : {
    screen : sidebarmenu,
    navigationOptions : {
      header : null,
    }
  }

},
{
 initialRouteName : "Login" 
}
);

export default createAppContainer(RouteStack);

