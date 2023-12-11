import {Image, View, Text, ImageBackground} from 'react-native';
import MainBackground from '../../components/MainBackground';
import Logo from '../../components/Logo';
import MyTexts from '../../components/MyTexts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Login from '../LoginScreen/Login';

const SplashScreen = () => {
  return (
    <View>
       <Logo />
  
      <Image
        source={require('../../assets/images/CallerBackground.png')}
        resizeMode="stretch"
        style={{
          width: wp('100%'),
          height: hp('100%'),
          //backgroundColor: 'red'
           marginTop: -hp(50)
        }}
      />
  
      <Image
        source={require('../../assets/images/BG.png')}
        resizeMode="stretch"
        style={{
          width: wp('100%'),
          height: hp('45%'),
           //backgroundColor: 'green',

          marginTop: -hp(40),
        
        }}></Image>

     
      <View style={{
        
       // justifyContent: 'center',
        alignSelf: 'center',
         marginVertical: -450,
         width: wp(90),
         height: hp(30),
        //backgroundColor: 'red',
        //paddingTop: 10
         
         }}>
             <MyTexts header="Lorem Ipsum" />
  
      <MyTexts header="Lorem Ipsum dol or sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore." />
      </View>

      {/* <MainBackground> */}

      {/* <Image
        source={require('../../assets/images/dooplogo.png')}
        style={{
         width: wp(60),
         height: hp(10),
         marginHorizontal: 80,
         marginTop: hp(35),
         backgroundColor: 'red'
        }}
      /> */}
    </View>
  );
};

export default SplashScreen;
