import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigation,{
    FullTab
} from 'react-native-material-bottom-navigation';

const exit = require("./signup/BG2.jpg");

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lat: null,
          lng: null,
          activeTab : 'Home',
          doctors : [],
          token : null,
          searchvalue : "",
          language : "",
        selectedProvince : "",
        province :[{
            "value": "آذربایجان شرقی",
            "display_name": "آذربایجان شرقی"
        },
        {
            "value": "آذربایجان غربی",
            "display_name": "آذربایجان غربی"
        },
        {
            "value": "اردبیل",
            "display_name": "اردبیل"
        },
        {
            "value": "اصفهان",
            "display_name": "اصفهان"
        },
        {
            "value": "البرز",
            "display_name": "البرز"
        },
        {
            "value": "ایلام",
            "display_name": "ایلام"
        },
        {
            "value": "بوشهر",
            "display_name": "بوشهر"
        },
        {
            "value": "تهران",
            "display_name": "تهران"
        },
        {
            "value": "چهارمحال و بختیاری",
            "display_name": "چهارمحال و بختیاری"
        },
        {
            "value": "خراسان جنوبی",
            "display_name": "خراسان جنوبی"
        },
        {
            "value": "خراسان رضوی",
            "display_name": "خراسان رضوی"
        },
        {
            "value": "خراسان شمالی",
            "display_name": "خراسان شمالی"
        },
        {
            "value": "خوزستان",
            "display_name": "خوزستان"
        },
        {
            "value": "زنجان",
            "display_name": "زنجان"
        },
        {
            "value": "سمنان",
            "display_name": "سمنان"
        },
        {
            "value": "سیستان و بلوچستان",
            "display_name": "سیستان و بلوچستان"
        },
        {
            "value": "فارس",
            "display_name": "فارس"
        },
        {
            "value": "قزوین",
            "display_name": "قزوین"
        },
        {
            "value": "قم",
            "display_name": "قم"
        },
        {
            "value": "کردستان",
            "display_name": "کردستان"
        },
        {
            "value": "کرمان",
            "display_name": "کرمان"
        },
        {
            "value": "کرمانشاه",
            "display_name": "کرمانشاه"
        },
        {
            "value": "کهگیلویه و بویراحمد",
            "display_name": "کهگیلویه و بویراحمد"
        },
        {
            "value": "گلستان",
            "display_name": "گلستان"
        },
        {
            "value": "گیلان",
            "display_name": "گیلان"
        },
        {
            "value": "لرستان",
            "display_name": "لرستان"
        },
        {
            "value": "مازندران",
            "display_name": "مازندران"
        },
        {
            "value": "مرکزی",
            "display_name": "مرکزی"
        },
        {
            "value": "هرمزگان",
            "display_name": "هرمزگان"
        },
        {
            "value": "همدان",
            "display_name": "همدان"
        },
        {
            "value": "یزد",
            "display_name": "یزد"
        }
    ]
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
        const UserToken = this.props.navigation.getParam('param');
        let docs;
            let favorited, space;
            let favToggle = "Favorite";
        return (
          <ImageBackground source={require('./signup/BG2.jpg')} style={styles.container} blurRadius={1.5}>
            <View style={styles.container}>
              <View style={{flexDirection:'row',marginLeft :"34.5%", marginTop :'5%'}}>
                <TouchableOpacity style={styles.profileButton1}
                  onPress = {() => this.props.navigation.navigate('Login')}
                >
                  <View style={styles.footer}>
                    <Text style={styles.profileButtonText}>
                     خروج
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.searchBarContainer}>
                <TextInput
                  value ={this.searchvalue}
                  style={styles.searchBox}
                  placeholder="Search doctor"
                  placeholderTextColor='gray'
                  onChangeText = {(name) => this.setState({searchvalue : name})}
                />
                </View>
                <TouchableOpacity style={styles.exitButton}>
                  <Image 
                    source={exit} 
                    style={styles.exitButtonIcon} 
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              <TouchableOpacity style = {styles.searchbutton}>
                <Text style = {{textAlign : 'center'}}>
                  جستجو
                </Text>
              </TouchableOpacity>
              <Picker
                selectedValue={this.state.selectedProvince}
                style={{height: '8%', width: '40%',backgroundColor:'#90caf9',flexDirection:'row',marginLeft:'5%',marginTop:'2%',borderRadius:30}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({selectedProvince: itemValue})
                }>
                {this.state.province.map((item) => 
                <Picker.Item key={item.display_name} label={item.display_name} value={item.value} />
                )}
              </Picker>
              <Picker
                  selectedValue={this.state.gender}
                  style={{height: '8%', width: '40%',backgroundColor:'#90caf9',flexDirection:'row',marginLeft:'55%',marginTop:'-13%',borderRadius:30}}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setState({gender: itemValue})
                  }>
                  <Picker.Item label="زن" value="زن" />
                  <Picker.Item label="مرد" value="مرد" />
              </Picker>
              <TouchableOpacity 
              style={{width:'30%',height:'5%',backgroundColor:'#90caf9',borderRadius:20,
              marginTop:'5%',marginLeft:'35%'}}
              >
                <Text style={{textAlign:'center'}}>اعمال فیلتر ها</Text>
              </TouchableOpacity>
              
              <ScrollView style={styles.listingsContainer}>
                {this.state.doctors.map((item) => (
                  <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('DoctorProfile',{param1:item,param2:UserToken})}
                    key = {item.medical_system_number}
                    style={{paddingBottom : '1%',paddingTop :'1%'}}
                  >
                    <View style={styles.listingView}>
                      <View style={styles.left}>
                        <Text style={styles.textBold}>
                          {item.user.first_name}
                        </Text>
                        <Text>
                          {item.bio}
                        </Text>
                        <Text style={styles.text}>
                          {item.expertise}
                        </Text>
                        <Text style={styles.text}>
                          {item.user.province}
                        </Text>
                              
                      </View>
                      <View style={styles.right}>
                        <Text style={styles.right}>
                          <Icon style={styles.angle} name="angle-double-left" size={50} color="rgba(255, 255, 255, 0.8)" />
                        </Text>
                      </View>
                      <Image source={{uri: item.picture}} style={styles.avatar}/>
                    </View>
                  </TouchableOpacity> 
                ))}
              </ScrollView>
              <BottomNavigation
                style={styles.footer}
                onTabPress = {newTab => this.props.navigation.navigate(newTab.key)}
                renderTab={this.renderTab}
                tabs={this.tabs}
              /> 
            </View>
          </ImageBackground>
        );
      }
    }
    
    export default Home;