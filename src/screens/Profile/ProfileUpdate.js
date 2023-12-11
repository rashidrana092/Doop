import React, { Component } from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
  } from 'react-native-responsive-screen';
import Logo from '../../components/Logo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTexts from '../../components/MyTexts';
import MyButtons from '../../components/MyButtons';

//const Tab = createMaterialTopTabNavigator();

const Tab=createBottomTabNavigator();

const ProfileUpdate =()=>{
    return(
        <View style={{

            
            //flex: 1,
            justifyContent: 'center',
            backgroundColor: '#FDFDFD'            
        }}>

        <View style={{
        //flexDirection: 'row',
        alignSelf: 'center',    
        //backgroundColor: 'red',
        marginTop: 5
        }}>
            
            <Image
            source={require('../../assets/images/dooplogo.png')}
            style={{
                width: wp(20),
                height: hp(5)
            
            }}
            >
            </Image>
            <Text
            style={{fontSize: 18,
            color: 'black',
            fontWeight: '700'
        
            }}
            >PROFILE</Text>
            </View>
            <View
            style={{
            backgroundColor: '#E8E9FD',
                 justifyContent: 'center',
                 alignSelf: 'center',
                 marginTop: 30,
                 borderColor: 'white',
                 borderWidth: 10,
                width: wp(35),
                height: hp(17.5),
                borderRadius: wp(30),
                //backgroundColor: 'red'
            }}
            />

<View
            style={{
            backgroundColor: '#9194F2',
                 justifyContent: 'center',
                 alignSelf: 'center',
                 marginTop: 30,
                 borderColor: 'white',
                 borderWidth: 5,
                width: wp(12),
                height: hp(6),
                borderRadius: wp(20),
                marginTop: -40
                //backgroundColor: 'red'
            }}>
            <Image
            source={require('../../assets/icons/edit.png')}
            resizeMode='stretch'
            style={{alignSelf: 'center'}}

            >

            </Image>

            </View>
            
           <Text
            style={{fontSize: 25,
            color: 'black',
            fontWeight: '700',
            textAlign: 'center',
            padding: 20    
        }}
           >Britney Sparks</Text> 
        
        <View
        style={{
        backgroundColor: '#E8E9FD',
        width: wp(90),
        height: hp(50),
        //backgroundColor: 'coral',
        padding:40,
        marginBottom: 20,
        //marginHorizontal: 10,
        borderColor: '#FFFF',
        borderWidth: 2,
        //justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        //paddingBottom: 20
        //marginBottom: 10
    }}>

    <Image
    source={require('../../assets/images/updateprofile.png')}
    style={{
        //backgroundColor: '#9194F2',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: -10,
       // marginBottom: 10,
        //borderColor: 'white',
        borderWidth: 5,
       width: wp(25),
       height: hp(15),
       //borderRadius: wp(20),
       //paddingTop: 10
       //backgroundColor: 'red'

    }} />

    <Text
    style={{
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontWeight: '600',
        paddingVertical: 5
    }}
    >Profile Updated!</Text>

    <Text
    style={{
        fontSize: 14,
        textAlign: 'center',
        paddingVertical: 20
    }}
    
    
    >Your profile detail has been updated, changes already reflected in the profile page

    </Text>  

    <TouchableOpacity
            style={{

                    width: wp(80),
                    height: hp(6),
                    backgroundColor: '#9194F2',
                    borderRadius: 200,
                    marginVertical: 10,
                    alignItems: 'center',
                    marginLeft: -25
                    

            }}
            >
                <Text
                style={{

                    color: 'white',
                    fontSize: 17,
                    textAlign: 'center',
                    margin: 15
    
                }}
                >Confirm</Text>
                
            </TouchableOpacity>

     </View>   

    <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen
          name="HomeStack"
          component={Logo}
          options={{
            tabBarLabel: 'Calender',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require('../../assets/icons/home.png')
                    : require('../../assets/icons/home.png')
                }
                style={{
                  // width: size,
                  // height: size,
                  // borderRadius: size,
                }}
              />
            ),
          }}
        />
      <Tab.Screen
          name="Home2"
          component={Logo}
          options={{
            tabBarLabel: 'Meeting',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require('../../assets/icons/calendar_month.png')
                    : require('../../assets/icons/calendar_month.png')
                }
                style={{
                //   width: size,
                //   height: size,
                //   borderRadius: size,
                 }}
              />
            ),
          }}
        />
          <Tab.Screen
          name="Home3"
          component={Logo}
          options={{
            tabBarLabel: 'Transcript',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require('../../assets/icons/forum.png')
                    : require('../../assets/icons/forum.png')
                }
                style={{
                //   width: size,
                //   height: size,
                //   borderRadius: size,
                 }}
              />
            ),
          }}
        />
          <Tab.Screen
          name="Home4"
          component={Logo}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require('../../assets/icons/account_circle.png')
                    : require('../../assets/icons/account_circle.png')
                }
                style={{
                  //width: wp(10),
                  //height: hp(2),
                //  borderRadius: size,
                }}
              />
            ),
          }}
        />

            </Tab.Navigator>
        </NavigationContainer>
        
        </View>
    );
  }

  export default ProfileUpdate;