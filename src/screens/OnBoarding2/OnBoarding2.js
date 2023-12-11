import React, {Component} from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import MainBackground from '../../components/MainBackground';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MyTexts from '../../components/MyTexts';
import MyButtons from '../../components/MyButtons';

const OnBoarding2 = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2,marginBottom: 10}}>
        <MainBackground />
        <View>
            <TouchableOpacity 
            style={{
                //backgroundColor: 'green',
                width: wp('90%'),
                height: hp('10%'),
                justifyContent: 'flex-end'                
                }}>

                <Text style={{
                  textAlign: 'right',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black'
                  
                  
                  }}>Skip</Text>
            </TouchableOpacity>
        </View>        
        <Image
          source={require('../../assets/images/GreyImageBox.png')}
          resizeMode="stretch"
          style={{
            width: wp('80%'),
            height: hp('40%'),
            //marginBottom: 400,
            marginHorizontal: 40,
            marginVertical: 100,
            
          }}></Image>
      </View>
      <View style={{
            flex: 0.25,
            marginBottom: 400,
            marginVertical: 150

                
        }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '900',
            color: 'black',
            marginHorizontal: 100,
            //marginVertical: 100,
            marginTop: 310,
            //marginBottom: 40,
            //backgroundColor: 'green',
            height: 50
            //padding: 20
          }}>
          Clone Your Voice
        </Text>
      </View>

      <View
        style={{
          //flex: 1,
          //backgroundColor: 'red',
          width: wp('90%'),
          marginHorizontal: 20,
          height: hp('12%'),
          marginTop: 10,
          marginBottom: 25,
          
        }}>
        <MyTexts
          header="Lorem Ipsum dolor sit amet,consectetur
                    adipiscing elit, sed do elusmod tempor incididunt 
                    ut labore et dolore."
        />
      </View>



      <View
        style={{marginBottom: 10}}
      >
        <MyButtons buttonText="Next" />
      </View>
    </View>
  );
};

export default OnBoarding2;
