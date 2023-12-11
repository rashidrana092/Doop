import React, { Component, useState } from 'react';
import {View,Text,Image,ImageBackground, TextInput,TouchableOpacity, Modal} from 'react-native';
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

const OnlineMeetingThem =()=>{
    const [visible , setVisibal] = useState(false)
    return(
        <View style={{

            
            flex: 1,
            //justifyContent: 'center',
            backgroundColor: '#FDFDFD',
        }}>
            <Modal
            visible={visible}

            >
                <TouchableOpacity onPress={()=>setVisibal(false)}>
                </TouchableOpacity>
            </Modal>

<ImageBackground
       source={require('../../assets/images/CallerBackground.png')}
      // imageStyle= {{opacity:0.5}}

       resizeMode='contain'
       style={{
        height: hp(100),
        paddingTop: 10,
        paddingLeft: 20,
        width: wp(100)
    }}
    >


        <View style={{
        //flexDirection: 'row',
        alignSelf: 'center',    
        //backgroundColor: 'red',
        margin: 15,
        marginLeft: 20,
       // flex: 2

        }}>
            
            <Image
            source={require('../../assets/images/dooplogo.png')}
            style={{
                width: wp(20),
                height: hp(5),
            }}
            >
            </Image>
            </View>
<View
    style={{
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    }}
>
        <Image
            source={require('../../assets/icons/Back.png')}
            style={{
                width: wp(6),
                height: hp(3),
                paddingLeft: 10
            
            }}
            >
            </Image>

            <Text
            style={{fontSize: 18,
            color: 'black',
            fontWeight: '700'
        
            }}
            >MEETING</Text>
            <Image
            source={require('../../assets/icons/Threedots.png')}
            style={{
                width: wp(1),
                height: hp(3),
            
            }}
            >
            </Image>
                   
</View>           
<View 
    style={{

     //   flex: 1,
        paddingTop: 10,
    }}

>
       
       <View
       style={{
        height: hp(6),
        width: wp(32),
        opacity: 0.5,
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
       // flex: 1
       

       }}
       >
        <Text
            style={{
                //textAlign: 'center'
                fontSize: 18,
                color: '#FFF',
                //fontWeight: 'bold'
                //opacity: 0.5
       
            }}
        >00.20.21</Text>
        <Text
         style={{
            //textAlign: 'center'
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
        }}
        
        >Dr. Quinn L.</Text>

       </View>
       
    
        <View
        style={{
         //   borderWidth: 0.50,
            height: hp(75),
            width: wp(90),
           backgroundColor:'white',
         //  opacity: 0.5,
            padding: 10,
            marginRight: 20,
            //paddingRight: 40,
            borderRadius: 20,
            //justifyContent: 'center',
            alignSelf: 'center'

        }}
        >
        <View
            style={{
             width: wp(80),
            // borderWidth: 1,
             height: hp(5),
             flexDirection: 'row',
             paddingLeft: 5,
            }}
        >
        <Image
        source={require('../../assets/icons/user2.png')}
        style={{
        backgroundColor: 'white',
        borderRadius: 10,
        width: wp(8),
        height: hp(4),

        }}
        ></Image>
        <Text
        style={{
            color: 'black',
            fontSize: 16,
            paddingVertical: 10
        }}
        >Jane P.</Text>
        </View>    

        <Text
        style={{
            color: 'black',
            fontSize: 14,
            paddingLeft: 35,
            paddingRight: 15
        }}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim dolor ut lorem efficitur feugiat maximus at sapien. Pellentesque commodo sem egestas metus ullamcorper tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim dolor ut lorem efficitur feugiat maximus at sapien. Pellentesque commodo sem egestas metus ullamcorper tempus</Text>

<View
            style={{
             width: wp(80),
            // borderWidth: 1,
             height: hp(7),
             flexDirection: 'row',
             padding: 15
            }}
        >
        <Image
        source={require('../../assets/icons/user2.png')}
        style={{
        backgroundColor: 'white',
        borderRadius: 10,
        width: wp(8),
        height: hp(4),

        }}
        ></Image>
        <Text
        style={{
            color: 'black',
            fontSize: 16,
            paddingTop:10
        }}
        >Jane P.</Text>
        </View>    

        <Text
        style={{
            color: 'black',
            fontSize: 14,
            paddingLeft: 35,
            paddingLeft: 35,
            paddingRight: 15
  
        }}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim dolor ut lorem efficitur feugiat maximus at sapien. Pellentesque commodo sem egestas metus ullamcorper tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim dolor ut lorem efficitur feugiat maximus at sapien. Pellentesque commodo sem egestas metus ullamcorper tempus</Text>
<View
            style={{
             width: wp(80),
            // borderWidth: 1,
             height: hp(7),
             flexDirection: 'row',
             padding: 15
            }}
        >
<Image
        source={require('../../assets/icons/user2.png')}
        style={{
        backgroundColor: 'white',
        borderRadius: 10,
        width: wp(8),
        height: hp(4),
        paddingTop:10
        }}
        ></Image>
        <Text
        style={{
            color: 'black',
            fontSize: 16,
            paddingTop:10
        }}
        >Jane P.</Text>
        </View>    
        <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                   // borderWidth: 0.5,
                    borderColor: '#000',
                    height: 40,
                    borderRadius: 5,
                    margin: 10,
                    width: wp(85)
                  }}>
                  
                  <TextInput
                    style={{flex: 1, fontSize: 14,
                    //width: wp(90)
                }}
                    placeholder="Type something..."
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'lightgrey'}
                  />
                  <Image
                    source={require('../../assets/icons/sendmsg.png')} 
                    style={{
                      padding: 10,
                      margin: 10,
                      height: hp(2),
                      width: wp(2),
                      resizeMode: 'stretch',
                      alignItems: 'center',
                    }}
                  />

                <Image
                    source={require('../../assets/icons/emptyheart.png')} 
                    style={{
                      padding: 10,
                      margin: 10,
                      height: hp(5),
                      width: wp(10),
                      resizeMode: 'stretch',
                      alignItems: 'center',
                    }}
                  />
           </View>

            <View
                style={{
                 //   flex: 1,
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    marginTop: 60

                }}>

            {/* Video */}
            <TouchableOpacity
                style={{
                //backgroundColor:'red',
                width: wp(12),
                height: hp(5),
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',

                }}
            >
                <Image
                    source={require('../../assets/icons/videocam.png')}
                ></Image>
                <Text>Video</Text>
            </TouchableOpacity>

            {/* Audio */}
            <TouchableOpacity
                style={{
                //backgroundColor:'red',
                width: wp(12),
                height: hp(5),
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',

                }}
            >
                <Image
                    source={require('../../assets/icons/mic.png')}
                ></Image>
                <Text>Audio</Text>
            </TouchableOpacity>

            {/* Call */}
            <TouchableOpacity
                style={{
                //backgroundColor:'red',
                width: wp(12),
                height: hp(5),
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',

                }}
            >
                <Image
                    source={require('../../assets/icons/phone.png')}
                ></Image>
                <Text>Call</Text>
            </TouchableOpacity>


            {/* Raise */}
            <TouchableOpacity
                style={{
                //backgroundColor:'red',
                width: wp(12),
                height: hp(5),
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',

                }}
            >
                <Image
                    source={require('../../assets/icons/front_hand.png')}
                ></Image>
                <Text>Raise</Text>
            </TouchableOpacity>

                        {/* React */}
                        <TouchableOpacity
                style={{
                //backgroundColor:'red',
                width: wp(12),
                height: hp(5),
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',

                }}
            >
                <Image
                    source={require('../../assets/icons/hand.png')}
                ></Image>
                <Text>React</Text>
            </TouchableOpacity>

            </View>        








        </View>


        </View>
        </ImageBackground>    
     
        </View>
     
    );
  }

  export default OnlineMeetingThem;