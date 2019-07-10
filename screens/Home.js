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
  Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Rating} from 'react-native-elements';
import BottomNavigation,{
    FullTab
  } from 'react-native-material-bottom-navigation';
  
  const exit = require("./exit.png");
  import Stars from 'react-native-stars';
  class Home extends React.Component {
    constructor(props) {
      
        super(props);
        this.state = {
          UserToken : this.props.navigation.getParam('param'),
          UserKind : null,
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
      
      componentWillMount = async () => {
        await this.setState({
          UserKind : JSON.parse(this.state.UserToken["_bodyInit"])
        })
          const url = "https://nedabackend.pythonanywhere.com/doctors/";
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
          this.setState({doctors : JSON.parse(response["_bodyInit"])})
        }
        catch(error){
          console.log(error)
        }
          
      }
      Filter = async (province,gender) => {
        const url = "https://nedabackend.pythonanywhere.com/doctors/?gender=" + gender + "&user__province=" + province
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
          this.setState({doctors : JSON.parse(response["_bodyInit"])})
        }
        catch(error){
          console.log(error)
        }
        console.log(response)
        if (response.status >= 200 && response.status < 300){
          
        }
      }
      Search = async (FirstName) => {
        const url = "https://nedabackend.pythonanywhere.com/doctors/?search=" + FirstName 
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
          this.setState({doctors : JSON.parse(response["_bodyInit"])})
        }
        catch(error){
          console.log(error)
        }
      }

      
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
          const {rating} =this.props;
          const tabs = [
            {
              key: 'Home',
              icon: 'home',
              label: 'خانه',
              barColor: '#90caf9',
              pressColor: 'rgba(255, 255, 255, 0.16)'
            },
            {
              key: this.state.UserKind.kind + 'Profile',
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
                <TouchableOpacity style={styles.exitButton}
                  onPress = {() => this.componentWillMount()}
                >
                  <Image 
                    source={exit} 
                    style={styles.exitButtonIcon} 
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              <TouchableOpacity style = {styles.searchbutton}
                onPress= {() => {this.Search(this.state.searchvalue)}}>
                <Text style = {{textAlign : 'center',paddingTop:'25%'}}>
                  جستجو
                </Text>
              </TouchableOpacity>
              <Picker
                selectedValue={this.state.selectedProvince}
                style={{alignItems:'center',height: '6%', width: '37%',backgroundColor:'#90caf9',flexDirection:'row',marginLeft:'5%',borderRadius:30}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({selectedProvince: itemValue})
                }>
                {this.state.province.map((item) => 
                <Picker.Item key={item.display_name} label={item.display_name} value={item.value} />
                )}
              </Picker>
              <Picker
                  selectedValue={this.state.gender}
                  style={{alignItems:'center',height: '6%', width: '37%',backgroundColor:'#90caf9',flexDirection:'row',marginLeft:'55%',marginTop:'-12%',borderRadius:30}}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setState({gender: itemValue})
                  }>
                  <Picker.Item label="زن" value="زن"/>
                  <Picker.Item label="مرد" value="مرد" />
              </Picker>
              <TouchableOpacity style={{width:'30%',height:'4%',backgroundColor:'#90caf9',borderRadius:20,marginTop:'5%',marginLeft:'35%',paddingTop:'2%',marginBottom:'3%'}}
              onPress ={() => {this.Filter(this.state.selectedProvince,this.state.gender)}}>
                      <Text style={{textAlign:'center'}}>اعمال فیلتر ها</Text>
              </TouchableOpacity>
              <ScrollView style={styles.listingsContainer}>
                {this.state.doctors.map((item) => (
                  // console.log(item.doctor_rates)
                  
                  <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('DoctorProfile',{param1:item,param2:this.state.UserToken})}
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

                        {
                          // item.doctor_rates.length !==0?(
                            // console.log(item.doctor_rates[0].rate)
                        // <Text>
                        //   {item.rate}
                        //   </Text>
                        <Rating
                        imageSize={20}
                        ratingBackgroundColor='#2196f3'
                        startingValue={item.rate}
                        readonly
                        />
                        // ):null
                        }
                              
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
                onTabPress = {newTab => this.props.navigation.navigate(newTab.key,{param1 : this.state.UserToken})}
                renderTab={this.renderTab}
                tabs={tabs}
              /> 
            </View>
          </ImageBackground>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        width: null,
        height: null,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      },
      searchBarContainer: {
        padding: 50,
        height: 40,
        width: 375,
        // marginBott1om: 40,
        paddingBottom : '5%',
        alignItems: 'center',
        justifyContent:'center',
        // flexDirection :'row',
      },
      searchBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        padding :'2%',
        marginLeft : "15%",
        color: 'white',
        backgroundColor: '#aebfbe',
        alignItems :'center',
        justifyContent :'space-between',
        textAlign :'center',
        width :'120%',
      },
      input: {
        margin: 5,
        width: 320,
        height: 50,
        padding: 5,
        fontSize: 18,
        borderColor: 'white',
        borderRadius: 5,
        backgroundColor: 'white',
        textAlign: 'center',
        alignSelf: 'center'
      },
      photo: {
        height: 40,
        width: 40,
        borderRadius: 20
      },
      listingsContainer: {
        height : 200,
        // marginBottom: '25%',
        marginLeft : '10%',
        paddingBottom : '5%'
      },
      text: {
        color: "white",
      },
      textBold: {
        color: "white",
        fontWeight: 'bold',
      },
      doctorListing: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        borderColor:'rgba(255, 255, 255, 0.2)',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      callButton: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFF',
        alignSelf: 'center',
        padding: 5,
      },
      touchCallButton: {
      },
      listingView: {
        backgroundColor: '#2196f3',
        width:320,
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
      },
      left: {
        flex: 0.9,
      },
      right: {
        flexDirection: 'row',
        flex: 0.1,
        alignSelf: 'center',
      },
      star: {
        color: 'orange',
      },
      angle: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
      touchHighlightRow: {
        flex: 0.7,
         marginLeft :'6%',
      },
      flex: {
        flex: 1,
      },
      footer: {
        alignSelf: 'stretch',
      },
      profileButton: {
        height: 55,
        width:'80%',
        backgroundColor: '#2286c3',
        marginLeft:'60%',
        marginTop : '-8%',
        left:60,
        borderColor: 'black',
        borderWidth: 1,
      },
      profileButton1: {
        height: 55,
        width:'160%',
        backgroundColor: '#2286c3',
        marginLeft:'70%',
        marginTop : '-8%',
        borderColor: 'black',
        borderWidth: 1,
        right:340
      },
      profileButtonText: {
        fontSize: 16,
        color: '#FFF',
        textAlign:'center',
        alignSelf: 'center',
        marginTop:'5%'
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
      },
      searchbutton:{
        backgroundColor: '#90caf9',
        width : '30%',
        height :'4%',
        marginLeft : '35%',
        marginRight :'10%',
        justifyContent :'center',
        borderRadius : 20,
        marginBottom : '7%',
      },
      exitButton:{
        marginTop : "-8%",
        marginLeft:'90%',
        width:'5%',
        height:'5%'
      },
      rating : {
        marginLeft:'2%'
      },
      exitButtonIcon:{
        width: 25,
        height: 25
      }
    });
    
    export default Home;