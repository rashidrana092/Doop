import React, { Component } from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
  } from 'react-native-responsive-screen';
import Logo from '../../components/Logo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//const Tab = createMaterialTopTabNavigator();

const Tab=createBottomTabNavigator();

const Profile =()=>{
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
        backgroundColor: '#FAFAFA',
        width: wp(90),
        height: hp(50),
        //backgroundColor: 'coral',
        //padding:60,
        marginHorizontal: 10,
        //borderColor: '#FCFCFD',
        borderWidth: 0.10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        //paddingBottom: 20
        marginBottom: 10
    }}>

        <View
            style={{
                backgroundColor: 'white',
                width: wp(80),
                height: hp(20),
                alignSelf: 'center',
                borderRadius: 5,
                marginBottom: 225,
                borderRadius: 10  
            }}>
            
            <Text
            style={{
            fontSize: 14,
            paddingTop: 10,
            paddingLeft: 10,
           
            }}
            >User ID</Text>
            
            <Text
            style={{
        
                fontSize: 16,
                paddingTop: 10,
                paddingLeft: 10,
                color: 'black',
            
            }}
            >britneysparks</Text>
            <Image
                source={require('../../assets/icons/file-copy-fill.png',
                )}
                style={{
                    width: wp(5),
                    height: hp(3),
                    //backgroundColor: 'red',
                    alignSelf: 'flex-end',
                    marginVertical: -40,
                    marginRight: 10

                }}
            />
<Text
            style={{
            fontSize: 14,
            paddingTop: 90,
            paddingLeft: 10,
           
            }}
            >Account Number</Text>
            
            <Text
            style={{
        
                fontSize: 16,
                paddingTop: 10,
                paddingLeft: 10,
                color: 'black',
            
            }}
            >392030489134</Text>
            <Image
                source={require('../../assets/icons/file-copy-fill.png',
                )}
                style={{
                    width: wp(5),
                    height: hp(3),
                    //backgroundColor: 'red',
                    //alignSelf: 'flex-end',
                   // marginRight: 50,
                    marginLeft: 300,
                    marginVertical: -40

                }}
            />

          <View
          style={{flexDirection: 'row',
         // backgroundColor: 'red',
          height: hp(7),
          marginTop: 100,
          width: wp(85),
          marginBottom: 10
        }}
          >  
         <Image
         source={require('../../assets/icons/EditBox.png')}
         style={{
          width: wp(9),
          height: hp(5),
          marginTop: 1
        }}
         ></Image>   
        <Text
        style={{
            fontSize: 16,
            color: 'black',
            paddingLeft: 20,
            paddingTop: 10
            
        }}
        >Edit Profile Details</Text>
       
       <Image
         source={require('../../assets/icons/arrow-right-s-line.png')}
         style={{
          //width: wp(2),
          height: hp(3),
          marginHorizontal: 120,
          marginTop: 10
        }}
         ></Image>   
       </View>

          <View
          style={{flexDirection: 'row',
          //backgroundColor: 'red',
          height: hp(7),
          //marginTop: 100,
          width: wp(85),
          marginBottom: 5

        }}
          >  
         <Image
         source={require('../../assets/icons/Lock.png')}
         style={{
          width: wp(9),
          height: hp(5),
          marginTop: 1
        }}
         ></Image>   
        <Text
        style={{
            fontSize: 16,
            color: 'black',
            paddingLeft: 20,
            paddingTop: 10
            
        }}
        >Change PIN</Text>
       
       <Image
         source={require('../../assets/icons/arrow-right-s-line.png')}
         style={{
          //width: wp(2),
          height: hp(3),
          marginHorizontal: 164,
          marginTop: 10
        }}
         ></Image>   
       </View>
       <View
          style={{flexDirection: 'row',
          //backgroundColor: 'red',
          height: hp(7),
         // marginTop: 100,
          width: wp(85)
        }}
          >  
         <Image
         source={require('../../assets/icons/Logout.png')}
         style={{
          width: wp(9),
          height: hp(5),
          marginTop: 1
        }}
         ></Image>   
        <Text
        style={{
            fontSize: 16,
            color: 'black',
            paddingLeft: 20,
            paddingTop: 10
            
        }}
        >Logout</Text>
       
       <Image
         source={require('../../assets/icons/arrow-right-s-line.png')}
         style={{
          //width: wp(2),
          height: hp(3),
          marginHorizontal: 195,
          marginTop: 10
        }}
         ></Image>   
       </View>

       </View>
            

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

  export default Profile;