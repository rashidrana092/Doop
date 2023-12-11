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
import { Calendar } from 'react-native-calendars';


//const Tab = createMaterialTopTabNavigator();

const Tab=createBottomTabNavigator();

const CalendarHome =()=>{
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
            >Calendar</Text>
            </View>

            <View
            style={{
                
           // backgroundColor: 'red',
            width: wp(100),
            height: hp(40),
            marginTop: 20,
            borderColor: 'lightgrey',
            borderWidth: 1,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopWidth: 0,

          }}
            >
          <Calendar/>
        </View>

        <View
            style={{
              //backgroundColor: 'coral',
              width: wp(100),
              height: hp(39),
              //flex: 1,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                paddingBottom: 10,
                textAlign: 'center',
                paddingTop: 20
              }}>
              August 03, 2023
            </Text>

            <View
            style={{

              borderRadius: 20,
              borderTopColor: 'white',
              borderLeftWidth: 0.3,
              borderLeftColor: 'lightgrey',
              borderBottomWidth: 0.3,
              borderBottomColor: 'lightgrey',
              marginBottom: 20,
             // backgroundColor: 'red',
              paddingHorizontal: 20,

            }}
              >
              <View
                style={{
                  width: wp(10),
                  height: hp(7),
                  //borderColor: 'red',
                  //borderWidth: 2,
                 //  backgroundColor: 'red',
                //  borderRadius: 15,
                  //flex: 3,
                  flexDirection: 'row',
                //  width: wp(90),
                }}>
                <View
                  style={{
                    width: wp(70),
                    height: hp(15),
                    //borderColor: 'red',
                    //borderWidth: 2,
                    //backgroundColor: 'red',
                    borderRadius: 20,
                    // flex: 2,
                    flexDirection: 'row',
                  }}>
                  <View style={{
                    flex: 1,
                     flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        //fontWeight: '600',
                        paddingLeft: 10,
                        paddingTop: 10,
                        color: 'black',
                      }}>
                      Online Meeting
                    </Text>
                    <Text
                      style={{
                        flex: 1,
                        // flexDirection: 'row'
                        paddingLeft: 10,
                        paddingTop: 5,

                        color: 'black',
                      }}>
                      01:00 PM to 02:00 PM
                    </Text>
                  </View>

                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingTop: 20,
                      width: wp(20),
                      //backgroundColor: 'pink'
                    }}>
                    Teams
                  </Text>
                </View>

                <View
                  style={{
                    //flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8',
                    width: wp(20),
                    height: hp(7),
                    //borderWidth: 2,
                    borderRadius: 20,
                    //borderRightWidth:0.0,
                    //borderRightColor: 'red',
                    //borderTopEndRadius: 10,
                    //borderBottomRightRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/icons/phone.png')}
                    resizeMode="contain"
                    style={{
                      width: wp(5),
                      height: hp(5),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/notify.png')}
                    style={{
                      width: wp(5),
                      height: hp(3),
                    }}
                  />
                  
                </View>
              </View>
            </View>

            <View
           style={{

            borderRadius: 20,
            borderTopColor: 'white',
            borderLeftWidth: 0.3,
            borderLeftColor: 'lightgrey',
            borderBottomWidth: 0.3,
            borderBottomColor: 'lightgrey',
            marginBottom: 20,
           // backgroundColor: 'red',
            paddingHorizontal: 20,

          }} >
              <View
                style={{
                  width: wp(10),
                  height: hp(7),
                  //borderColor: 'red',
                  //borderWidth: 2,
                  // backgroundColor: '#D8D8D8',
                  borderRadius: 15,
                  //flex: 3,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: wp(70),
                    height: hp(15),
                    //borderColor: 'red',
                    //borderWidth: 2,
                    // backgroundColor: '#FDFDFD',
                    borderRadius: 20,
                    // flex: 2,
                    flexDirection: 'row',
                  }}>
                  <View style={{
                    flex: 1,
                     flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        //fontWeight: '600',
                        paddingLeft: 10,
                        paddingTop: 10,
                        color: 'black',
                      }}>
                      Online Meeting
                    </Text>
                    <Text
                      style={{
                        flex: 1,
                        // flexDirection: 'row'
                        paddingLeft: 10,
                        paddingTop: 5,

                        color: 'black',
                      }}>
                      01:00 PM to 02:00 PM
                    </Text>
                  </View>

                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingTop: 20,
                      width: wp(20),
                      //backgroundColor: 'pink'
                    }}>
                    Teams
                  </Text>
                </View>

                <View
                  style={{
                    //flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8',
                    width: wp(20),
                    height: hp(7),
                    //borderWidth: 2,
                    borderRadius: 20,
                    //borderRightWidth:0.0,
                    //borderRightColor: 'red',
                    //borderTopEndRadius: 10,
                    //borderBottomRightRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/icons/phone.png')}
                    resizeMode="contain"
                    style={{
                      width: wp(5),
                      height: hp(5),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/notify.png')}
                    style={{
                      width: wp(5),
                      height: hp(3),
                    }}
                  />
                  
                </View>
              </View>
            </View>

            <View
                    style={{

                      borderRadius: 20,
                      borderTopColor: 'white',
                      borderLeftWidth: 0.3,
                      borderLeftColor: 'lightgrey',
                      borderBottomWidth: 0.3,
                      borderBottomColor: 'lightgrey',
                      marginBottom: 20,
                     // backgroundColor: 'red',
                      paddingHorizontal: 20,
        
                    }}
              >
              <View
                style={{
                  width: wp(10),
                  height: hp(7),
                  //borderColor: 'red',
                  //borderWidth: 2,
                  // backgroundColor: '#D8D8D8',
                  borderRadius: 15,
                  //flex: 3,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: wp(70),
                    height: hp(15),
                    //borderColor: 'red',
                    //borderWidth: 2,
                    // backgroundColor: '#FDFDFD',
                    borderRadius: 20,
                    // flex: 2,
                    flexDirection: 'row',
                  }}>
                  <View style={{
                    flex: 1,
                     flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        //fontWeight: '600',
                        paddingLeft: 10,
                        paddingTop: 10,
                        color: 'black',
                      }}>
                      Online Meeting
                    </Text>
                    <Text
                      style={{
                        flex: 1,
                        // flexDirection: 'row'
                        paddingLeft: 10,
                        paddingTop: 5,

                        color: 'black',
                      }}>
                      01:00 PM to 02:00 PM
                    </Text>
                  </View>

                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingTop: 20,
                      width: wp(20),
                      //backgroundColor: 'pink'
                    }}>
                    Teams
                  </Text>
                </View>

                <View
                  style={{
                    //flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8',
                    width: wp(20),
                    height: hp(7),
                    //borderWidth: 2,
                    borderRadius: 20,
                    //borderRightWidth:0.0,
                    //borderRightColor: 'red',
                    //borderTopEndRadius: 10,
                    //borderBottomRightRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/icons/phone.png')}
                    resizeMode="contain"
                    style={{
                      width: wp(5),
                      height: hp(5),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/notify.png')}
                    style={{
                      width: wp(5),
                      height: hp(3),
                    }}
                  />
                  
                </View>
              </View>
            </View>

      </View>
<View  style={{
  //marginBottom: 30,//backgroundColor: 'red',
//height: hp(60),
width: wp(100),

// alignItems: 'stretch'
}}>
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
                 width: size,
                   height: size,
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
                  width: size,
                  height: size,
                //  borderRadius: size,
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
                   width: size,
                   height: size,
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
                  width: wp(6),
                  height: hp(3),
                //  borderRadius: size,
                }}
              />
            ),
          }}
        />

            </Tab.Navigator>
        </NavigationContainer>
        </View>
        </View>
    );
  }

  export default CalendarHome;