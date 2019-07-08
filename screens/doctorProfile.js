
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
  
      this.state = {
        UserToken : this.props.navigation.getParam('param1'),
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
            let favorited, space;
            let favToggle = "Favorite";
        return (
          <ImageBackground source={require('./signup/BG2.jpg')} style={styles.container} blurRadius={1.5}>
            <View style={styles.container}>
              <View style={styles.searchBarContainer}>
              <TouchableOpacity
                  style={styles.searchBox}
                  placeholderTextColor='gray'
                  onPress={() => this.props.navigation.navigate('DoctorEditProfile',{param1 : this.state.UserToken})}
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
                     this.state.docs.map((item) =>(
                      <TouchableOpacity
                      onPress = {() => this.props.navigation.navigate('AppointmentPage',{param1:item})}
                      key = {item.medical_system_number}
                      style={{paddingBottom : '1%',paddingTop :'1%'}}
                    >
                      <View style={styles.touchHighlightRow} 
                      >
                          <View style={styles.listingView}>
                          <View style={styles.left}>
                              <Text style={styles.textBold}>
                                {item.name}
                              </Text>
                              <Text>
                                  {item.expert}
                              </Text>
                              <Text>
                                  {item.time}
                              </Text>
                          </View>
                          <View style={styles.right}>
                              <Text style={styles.right}>
                              <Icon style={styles.angle} name="angle-double-left" size={50} color="rgba(255, 255, 255, 0.8)" />
                              </Text>
                          </View>
                          <Image source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}} style={styles.avatar}/>
                          </View>
                      </View>
                      </TouchableOpacity>
                     ))
                   }
                 </ScrollView>
                
                    {/* <View style={styles.touchHighlightRow} 
                    >
                        <View style={styles.listingView}>
                        <View style={styles.left}>
                            <Text style={styles.textBold}>
                            علی شفیعی
                            </Text>
                            <Text>
                                متخصص قلب و عروق
                            </Text>
                            <Text>
                                8:00     پنج شنیه
                            </Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.right}>
                            <Icon style={styles.angle} name="angle-double-left" size={50} color="rgba(255, 255, 255, 0.8)" />
                            </Text>
                        </View>
                        <Image source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}} style={styles.avatar}/>
                        </View>
                    </View> */}
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
    