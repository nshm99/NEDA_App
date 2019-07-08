import React from 'react'
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native'

import styles from './SignUp.style';

const background = require("./BG2.jpg");
const backIcon = require("./back.png");
const HospitalIcon = require("./HospitalIcon.png");
const DocIcon = require("./DocIcon.png");
const PatientIcon = require("./PatIcon.jpg");

export default class SignupView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{ opacity: 0.7 }}
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
           blurRadius={1.5}
        >
        <View style={styles.headerContainer}>
          <View style={styles.headerIconView}>
            <TouchableOpacity 
              style={styles.headerBackButtonView}
              onPress = {() => this.props.navigation.navigate('Login')}
            >
              <Image 
                source={backIcon} 
                style={styles.backButtonIcon} 
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.headerTitleView}>
            <Text style={styles.titleViewText}>Sign Up</Text>
          </View>

          <View style={styles.inputs}>
            <View style={styles.IconView}>
              <TouchableOpacity  
                onPress = {() => this.props.navigation.navigate('DoctorSignupPage')}
              >
				        <Image
						      source={DocIcon}
		              style={styles.DocButtonIcon}
			            resizeMode="contain"
					      />
              </TouchableOpacity>

              <TouchableOpacity
               onPress = {() => this.props.navigation.navigate('PatientSignupPage')}
               >
					      <Image
						      source={PatientIcon}
                  style={styles.DocButtonIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity 
                onPress = {() => this.props.navigation.navigate('HospitalSignupPage')}>
        				<Image
				        	source={HospitalIcon}
                  style={styles.DocButtonIcon}
                  resizeMode="contain"
                  />
              </TouchableOpacity>  

            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
}



