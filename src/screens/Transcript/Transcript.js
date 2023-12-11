import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Logo from '../../components/Logo';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//const Tab = createMaterialTopTabNavigator();

const Tab = createBottomTabNavigator();

const Transcript = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FDFDFD',
      }}>
      <View
        style={{
          //flexDirection: 'row',
          alignSelf: 'center',
          //backgroundColor: 'red',
          marginTop: 5,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/dooplogo.png')}
          style={{
            width: wp(20),
            height: hp(5),
          }}></Image>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
          TRANSCRIPT
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 0.5,
          borderColor: '#000',
          height: 40,
          borderRadius: 5,
          margin: 10,
        }}>
        <Image
          source={require('../../assets/icons/search.png')} //Change your icon image here
          style={{
            padding: 10,
            margin: 5,
            height: hp(2),
            width: wp(2),
            resizeMode: 'stretch',
            alignItems: 'center',
          }}
        />

        <TextInput
          style={{flex: 1, fontSize: 16}}
          placeholder="Search for names & keywords"
          underlineColorAndroid="transparent"
          placeholderTextColor={'lightgrey'}
        />
        <Image
          source={require('../../assets/icons/Icon.png')} //Change your icon image here
          style={{
            padding: 10,
            margin: 10,
            height: hp(2),
            width: wp(2),
            resizeMode: 'stretch',
            alignItems: 'center',
          }}
        />
      </View>
      <View
        style={{
          //  backgroundColor: 'red',
          justifyContent: 'center',
          alignSelf: 'center',
          //  marginTop: 60,
          //     borderColor: 'red',
          //    borderWidth: 1,
          width: wp(90),
          height: hp(70),
          flex: 7,
          marginBottom: 10,
        }}>
        <View
          style={{
          //     backgroundColor: 'coral',
            width: wp(90),
            height: hp(20),
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingBottom: 10,
            }}>
            September 14, 2023
          </Text>

          <View
            style={{
              width: wp(90),
              borderRadius: 20,
              borderTopColor: 'white',
              borderLeftWidth: 0.3,
              borderLeftColor: 'lightgrey',
              borderBottomWidth: 0.3,
              borderBottomColor: 'lightgrey',
              marginBottom: 20,
      }}>
            <View
              style={{
                width: wp(10),
                height: hp(8),
                //borderColor: 'red',
                //borderWidth: 2,
                // backgroundColor: '#D8D8D8',
                borderRadius: 15,
                //flex: 3,

                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: wp(60),
                  // height: hp(5),
                  //borderColor: 'red',
                  //borderWidth: 2,
                   //backgroundColor: 'red',
                  borderRadius: 20,
                  // flex: 2,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 1, flexDirection: 'column'}}>
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
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  backgroundColor: '#D8D8D8',
                  width: wp(30),
                  borderRadius: 20,
                }}>
                <Image
                  source={require('../../assets/icons/Open.png')}
                  resizeMode="contain"
                  style={{
                    width: wp(5),
                    height: hp(5),
                  }}
                />
                <Image
                  source={require('../../assets/icons/Delete.png')}
                  style={{
                    width: wp(5),
                    height: hp(3),
                  }}
                />
                <Image
                  source={require('../../assets/icons/Save.png')}
                  style={{
                    width: wp(6),
                    height: hp(3),
                  }}
                />
              </View>
            </View>
          </View>

          <View
           style={{
            width: wp(90),
            borderRadius: 20,
            borderTopColor: 'white',
            borderLeftWidth: 0.3,
            borderLeftColor: 'lightgrey',
            borderBottomWidth: 0.3,
            borderBottomColor: 'lightgrey',
            marginBottom: 20,
    }} >
     <View
              style={{
                width: wp(10),
                height: hp(8),
                //borderColor: 'red',
                //borderWidth: 2,
                // backgroundColor: '#D8D8D8',
                borderRadius: 15,
                //flex: 3,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: wp(60),
                  // height: hp(5),
                  //borderColor: 'red',
                  //borderWidth: 2,
                  // backgroundColor: '#FDFDFD',
                  borderRadius: 20,
                  // flex: 2,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 1, flexDirection: 'column'}}>
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
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  backgroundColor: '#D8D8D8',
                  width: wp(30),
                  //borderWidth: 2,
                  borderRadius: 20,
                  //borderRightWidth:0.0,
                  //borderRightColor: 'red',
                  //borderTopEndRadius: 10,
                  //borderBottomRightRadius: 10,
                }}>
                <Image
                  source={require('../../assets/icons/Open.png')}
                  resizeMode="contain"
                  style={{
                    width: wp(5),
                    height: hp(5),
                  }}
                />
                <Image
                  source={require('../../assets/icons/Delete.png')}
                  style={{
                    width: wp(5),
                    height: hp(3),
                  }}
                />
                <Image
                  source={require('../../assets/icons/Save.png')}
                  style={{
                    width: wp(6),
                    height: hp(3),
                  }}
                />
              </View>
            </View>
          </View>
          <View
         style={{
          width: wp(90),
          borderRadius: 20,
          borderTopColor: 'white',
          borderLeftWidth: 0.3,
          borderLeftColor: 'lightgrey',
          borderBottomWidth: 0.3,
          borderBottomColor: 'lightgrey',
          marginBottom: 20,
  }}>         
      <View
              style={{
                width: wp(10),
                height: hp(8),
                //borderColor: 'red',
                //borderWidth: 2,
                // backgroundColor: '#D8D8D8',
                borderRadius: 15,
                //flex: 3,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: wp(60),
                  // height: hp(5),
                  //borderColor: 'red',
                  //borderWidth: 2,
                  // backgroundColor: '#FDFDFD',
                  borderRadius: 20,
                  // flex: 2,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 1, flexDirection: 'column'}}>
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
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  backgroundColor: '#D8D8D8',
                  width: wp(30),
                  //borderWidth: 2,
                  borderRadius: 20,
                }}>
                <Image
                  source={require('../../assets/icons/Open.png')}
                  resizeMode="contain"
                  style={{
                    width: wp(5),
                    height: hp(5),
                  }}
                />
                <Image
                  source={require('../../assets/icons/Delete.png')}
                  style={{
                    width: wp(5),
                    height: hp(3),
                  }}
                />
                <Image
                  source={require('../../assets/icons/Save.png')}
                  style={{
                    width: wp(6),
                    height: hp(3),
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              //   backgroundColor: 'coral',
              width: wp(90),
              height: hp(20),
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                paddingBottom: 10,
              }}>
              September 13, 2023
            </Text>

            <View
              style={{
                width: wp(90),
                borderRadius: 20,
                borderTopColor: 'white',
                borderLeftWidth: 0.3,
                borderLeftColor: 'lightgrey',
                borderBottomWidth: 0.3,
                borderBottomColor: 'lightgrey',
                marginBottom: 20,
        }}>              
        
          <View
                style={{
                  width: wp(10),
                  height: hp(8),
                  //borderColor: 'red',
                  //borderWidth: 2,
                  // backgroundColor: '#D8D8D8',
                  borderRadius: 15,
                  //flex: 3,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: wp(60),
                    // height: hp(5),
                    //borderColor: 'red',
                    //borderWidth: 2,
                    // backgroundColor: '#FDFDFD',
                    borderRadius: 20,
                    // flex: 2,
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
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
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8',
                    width: wp(30),
                    //borderWidth: 2,
                    borderRadius: 20,
                    //borderRightWidth:0.0,
                    //borderRightColor: 'red',
                    //borderTopEndRadius: 10,
                    //borderBottomRightRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/icons/Open.png')}
                    resizeMode="contain"
                    style={{
                      width: wp(5),
                      height: hp(5),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/Delete.png')}
                    style={{
                      width: wp(5),
                      height: hp(3),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/Save.png')}
                    style={{
                      width: wp(6),
                      height: hp(3),
                    }}
                  />
                </View>
              </View>
 
            </View>

            <View
          style={{
            width: wp(90),
            borderRadius: 20,
            borderTopColor: 'white',
            borderLeftWidth: 0.3,
            borderLeftColor: 'lightgrey',
            borderBottomWidth: 0.3,
            borderBottomColor: 'lightgrey',
            marginBottom: 20,
    }} >
              <View
                style={{
                  width: wp(10),
                  height: hp(8),
                  //borderColor: 'red',
                  //borderWidth: 2,
                  // backgroundColor: '#D8D8D8',
                  borderRadius: 15,
                  //flex: 3,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: wp(60),
                    // height: hp(5),
                    //borderColor: 'red',
                    //borderWidth: 2,
                    // backgroundColor: '#FDFDFD',
                    borderRadius: 20,
                    // flex: 2,
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
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
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8',
                    width: wp(30),
                    //borderWidth: 2,
                    borderRadius: 20,
                    //borderRightWidth:0.0,
                    //borderRightColor: 'red',
                    //borderTopEndRadius: 10,
                    //borderBottomRightRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/icons/Open.png')}
                    resizeMode="contain"
                    style={{
                      width: wp(5),
                      height: hp(5),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/Delete.png')}
                    style={{
                      width: wp(5),
                      height: hp(3),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/Save.png')}
                    style={{
                      width: wp(6),
                      height: hp(3),
                    }}
                  />
                </View>
              </View>
            </View>
            <View
           style={{
            width: wp(90),
            borderRadius: 20,
            borderTopColor: 'white',
            borderLeftWidth: 0.3,
            borderLeftColor: 'lightgrey',
            borderBottomWidth: 0.3,
            borderBottomColor: 'lightgrey',
            marginBottom: 20,
    }} >
              <View
                style={{
                  width: wp(10),
                  height: hp(8),
                  //borderColor: 'red',
                  //borderWidth: 2,
                  // backgroundColor: '#D8D8D8',
                  borderRadius: 15,
                  //flex: 3,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: wp(60),
                    // height: hp(5),
                    //borderColor: 'red',
                    //borderWidth: 2,
                    // backgroundColor: '#FDFDFD',
                    borderRadius: 20,
                    // flex: 2,
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
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
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8',
                    width: wp(30),
                    //borderWidth: 2,
                    borderRadius: 20,
                    //borderRightWidth:0.0,
                    //borderRightColor: 'red',
                    //borderTopEndRadius: 10,
                    //borderBottomRightRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/icons/Open.png')}
                    resizeMode="contain"
                    style={{
                      width: wp(5),
                      height: hp(5),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/Delete.png')}
                    style={{
                      width: wp(5),
                      height: hp(3),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/Save.png')}
                    style={{
                      width: wp(6),
                      height: hp(3),
                    }}
                  />
                </View>
              </View>
            </View>
            <View
            style={{
              width: wp(90),
              borderRadius: 20,
              borderTopColor: 'white',
              borderLeftWidth: 0.3,
              borderLeftColor: 'lightgrey',
              borderBottomWidth: 0.3,
              borderBottomColor: 'lightgrey',
              marginBottom: 20,
      }} >
                <View
                style={{
                  width: wp(10),
                  height: hp(8),
                  //borderColor: 'red',
                  //borderWidth: 2,
                  // backgroundColor: '#D8D8D8',
                  borderRadius: 15,
                  //flex: 3,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: wp(60),
                    // height: hp(5),
                    //borderColor: 'red',
                    //borderWidth: 2,
                    // backgroundColor: '#FDFDFD',
                    borderRadius: 20,
                    // flex: 2,
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
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
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8',
                    width: wp(30),
                    //borderWidth: 2,
                    borderRadius: 20,
                    //borderRightWidth:0.0,
                    //borderRightColor: 'red',
                    //borderTopEndRadius: 10,
                    //borderBottomRightRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/icons/Open.png')}
                    resizeMode="contain"
                    style={{
                      width: wp(5),
                      height: hp(5),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/Delete.png')}
                    style={{
                      width: wp(5),
                      height: hp(3),
                    }}
                  />
                  <Image
                    source={require('../../assets/icons/Save.png')}
                    style={{
                      width: wp(6),
                      height: hp(3),
                    }}
                  />
                </View>
              </View>
            </View>
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default Transcript;
