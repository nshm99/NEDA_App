
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
  } from 'react-native';

import styles from './AppointmentStyle'


const backIcon = require("./signup/back.png");


export default class Profile extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
        UserToken : this.props.navigation.getParam('param2'),
        isLoading : false,
        doctorInfo : null,
        clinicInfo: null,
        Time : this.props.navigation.getParam('param1'),
        peoples :[
            {
                name :'patient 1',
                id : 1
            }
            ,
            {
                name :'patient 2',
                id : 2
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
            {
                name :'patient 3',
                id : 3
            },
        ]
     };
    
  }
  componentWillMount = async () => {
    const url = this.state.Time.doctor
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
      this.setState({doctorInfo : JSON.parse(response["_bodyInit"])})
    }
    catch(error){
      console.log(error)
    }

    this.setState({isLoading : true})
      
  }
  cancel = async ()=>{
      const url = this.state.Time.url
      const patientToken = JSON.parse(this.state.UserToken["_bodyInit"]).token
      console.log(this.state.UserToken)
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


    // const PatientToken = JSON.parse(this.state.UserToken["_bodyInit"]).token
    // console.log(PatientToken)
    //       await fetch(this.state.Time.url, {
    //       mode: "cors",
    //       method: 'PUT',
    //       body:JSON.stringify({
    //             has_reserved : false,
    //           }),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         "Authorization" : "Token " + PatientToken
            
    //       }
    //     }).then(response => {
    //         console.log(response)
    //       return response.json()
    //     });
  }

render() {
    let splitedTime = this.state.Time.date_time.split('T');
    return (
        <View>
        {
                this.state.isLoading ?(
            
                    <View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBackButtonView}
                onPress = {() => this.props.navigation.navigate('PatientProfile')}
                >
                    <Image 
                        source={backIcon} 
                        style={styles.backButtonIcon} 
                        resizeMode="contain"
                        />
                </TouchableOpacity>
            </View>
            <Image style={styles.avatar} source={{uri: this.state.doctorInfo.picture}}/>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{this.state.doctorInfo.user.first_name}</Text>
                <Text style={styles.info}>{this.state.doctorInfo.expertise}</Text>
                <Text style={styles.description}>{splitedTime[0]} {splitedTime[1].slice(0.-1)}</Text>
               </View>
          </View>
            
                <ScrollView style = {styles.queue}>
                    {this.state.peoples.map((item) => (
                        <Text
                        style = {styles.people}
                        key = {item.id}
                        >
                        {item.name}
                        </Text>
                    ))}
                </ScrollView>
                <TouchableOpacity 
                style = {styles.cnacel}
                onPress = {() => this.cancel()}
                >
                    <Text style = {{textAlign : 'center',}}>لغو وقت</Text>
                </TouchableOpacity> 
                </View>
                ):<ActivityIndicator size = 'large'
                color = "blue"/>

                
         }
         </View>
    );
  }
}
