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
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './patientProfileStyle';
// import { NavigationBar } from 'navigationbar-react-native';
import BottomNavigation,{
    FullTab
} from 'react-native-material-bottom-navigation';
import { Slider } from 'react-native-gesture-handler';

class Home extends React.Component {
  if(exit){
  this.props.navigation.navigate('Login');}
  constructor(props) {
    super(props);
  }

  // GetData = async (Time) =>
  // {
    
  //   const url = "https://nedabackend.pythonanywhere.com/doctors/123456/"
  //   try{
  //     await fetch(url).then(response => response.json())
  //          .then((response) => {this.setState({docInfo : response})});
  //          console.log("________________________________________________")
  //          console.log(this.state.docInfo)
  //          console.log("\n")
  //          console.log(response)
  //     }
  //       catch(error) {
  //         console.log(error)
  //       }

  // }
   ShowTime  =   (Time) =>
     {
        // this.GetData(Time)

        return(
          // this.state.docInfo ?(
              <View>
              <TouchableOpacity
              onPress = {() => this.props.navigation.navigate('AppointmentPage'
              ,{param1:Time}
              )}
          key = {2}
          // {this.state.docInfo.medical_system_number}
          style={{paddingBottom : '1%',paddingTop :'1%'}}
        >
          <View style={styles.touchHighlightRow} 
          >
              <View style={styles.listingView}>
              <View style={styles.left}>
                  {/* <Text style={styles.textBold}>
                    {this.state.docInfo.user.first_name}
                    DSFG
                  </Text>
                  <Text>
                      {this.state.docInfo.expertise}
                      KDsjhf
                  </Text> */}
                      {this.TimeSplit(Time.date_time)}
                  
              </View>
              {/* <View style={styles.right}>
                  <Text style={styles.right}>
                  <Icon style={styles.angle} name="angle-double-left" size={50} color="rgba(255, 255, 255, 0.8)" />
                  </Text>
              </View> */}
              {/* <Image 
              source={"https://nedabackend.pythonanywhere.com/Media/Profile%20Pictures/Patients/default.png"}
                // {uri :this.state.docInfo.picture}} 
              style={styles.avatar}/> */}
              </View>
          </View>
          </TouchableOpacity>
          </View>
          // ):null
        );
      // }
            }
      TimeSplit = (time) =>{
        let result = time.split('T');
        return(
          <View  >
          <Text>
          {result[0]}           {result[1].slice(0,-1)}
          
          </Text>
          </View>
        );
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
          this.setState({
            patient: json
          });
          // console.log("will mount")
          // console.log(this.state.patient)
          // console.log("end")
          // console.log("\n")
          // console.log(this.state.patient[0].patient_appointment_times)
          // console.log("end")
        });
      }


      state = {
        UserToken : this.props.navigation.getParam('param1'),
        patient : [],
        lat: null,
        lng: null,
        activeTab :"",
        docInfo : null,
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
      };
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
          label: 'سوابق پزشکی',
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
            let favorited, space;
            let favToggle = "Favorite";
        let { 
              navigation,
              onToggleMenu 
        } = this.props
        return (
          <ImageBackground source={require('./signup/BG2.jpg')} style={styles.container} blurRadius={1.5}>
            <View style={styles.container}>
              <View style={styles.searchBarContainer}>
                <TouchableOpacity
                  style={styles.searchBox}
                  placeholderTextColor='gray'
                  onPress={() => this.props.navigation.navigate('PatientEditProfile')}
                >
                  <Text>
                    Edit
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
                    
                      this.state.patient.length !== 0 ? (
                        // console.log("inside if")
                      this.state.patient[0].patient_appointment_times.length !== 0?(
                      <View>
                        {/* {this.ShowTime(this.state.patient[0].patient_appointment_times[0])} */}
                        {this.state.patient[0].patient_appointment_times.map(appointment => this.ShowTime(appointment))}
                      </View>
                      ):null
                      ):null
                      
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
          </ImageBackground>
          
        );
      }
    }
    export default Home;

    
