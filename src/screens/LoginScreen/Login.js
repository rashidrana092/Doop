import React, {Component,useState} from 'react';
import {View, Text,StyleSheet,TextInput,ImageBackground,Image,TouchableOpacity,
Icon} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Logo from '../../components/Logo';
import MyTexts from '../../components/MyTexts';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

 const Login = props => {
    

  return (

    <View style={{flex: 1}}>
   <ImageBackground
    source={require('../../assets/images/BG.png')}
    style={{flex: 1,height: hp(100)}}
   ></ImageBackground>
    <View style={mystyles.mycontainer}>
        <View style={{
      
        //backgroundColor: 'red',
        flexDirection: 'row',
        marginVertical: 10,
        width: wp(100),
        height: hp(10)
        
        }}>
        <Image
        source={require('../../assets/icons/icons8-menu-48.png')}
        style={{height: hp(1),paddingTop: 50,
        margin: 10,
        width: wp(10),
        height: hp(3)
      //  backgroundColor: 'red'
    }}     
        resizeMode='stretch'    
        />

     <Text style={{justifyContent: 'center',
     alignSelf: 'center',
     marginHorizontal: 120,
     fontSize: 20,
     fontWeight: '700',
     color: 'black',
     paddingTop: 1
     }}>Sign In
        
        </Text>              

</View>
     
     <View style={{width: wp(100),
      height: hp(20),
      //backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/dooplogo.png')}
      >
        </Image>
        <Text style={{
            fontSize: 20,color: 'black', paddingTop: 20
        }}>Sign in to continue</Text> 
     </View>
  
      <View style={{paddingTop: 20}}>

           


        <TextInput
         placeholder='Email'
        keyboardType='email-address'
        style={mystyles.mytextInput}>
        </TextInput> 
 
        </View>
      

        <TextInput placeholder='Password'secureTextEntry={true} 
         style={mystyles.mytextInput}>

        </TextInput>
  <View style={{
    width: wp(100),
    height: hp(10),
    justifyContent: 'space-between',
   alignItems: 'center',
    //alignSelf: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
    marginLeft: 10
    }}>
{/*   
  <CheckBox
  title='Click Here'
 />  */}

 
 <Text
    style={{textAlign: 'center',
    paddingTop: 20,
    fontSize: 18,
    paddingLeft: 15
  
}}
 >Remember me</Text>
         <Text
          style={{textAlign: 'center',
            paddingTop: 20,
            fontWeight: '900',
            fontSize: 18,
            color: 'black',
            paddingRight: 25

        
        }}   
        >
            Forgot password?
        </Text>

  </View>

       

        <TouchableOpacity
        style={mystyles.myButton}
        >
        <Text
        style={{fontSize: 20,color: 'white',fontWeight: 'bold',
        textAlign: 'center'
        }}
        >Sign In</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',alignSelf:'baseline',
        paddingLeft: 25
    
        }}>
        <Text
        style={{
            
            textAlign: 'center',
            fontSize:15
        }}
        >
            Don't have an account?
        </Text>
            <TouchableOpacity>
        <Text style={{textAlign: 'left',color: 'black',fontWeight: 'bold',marginLeft:5,
        fontSize: 16
        
        }}>Sign up.</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row",marginHorizontal:30,
        justifyContent: 'center',
        paddingVertical: 70
    
    }}>
   
        <TouchableOpacity>
        
        <Image source={require('../../assets/icons/socials.png')}  width={50} height={50}>

        </Image>
            
        

        </TouchableOpacity>
        </View>
      
        
    

    </View>

</View>

);
}


const mystyles=StyleSheet.create({
mycontainer: 
{
        //width: wp('50%'),
        height: hp('100%')
},
mylogoText:
{
    color: '#FF5B2D',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 25
},
mywelcomeText:
{
    color: 'black',
    textAlign: 'left',
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold'
},
mytextInput:
{
    marginHorizontal: 20,
    backgroundColor: '#ECEDF1',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    height: hp(7),
    fontSize: 15,
    backgroundColor: '#F4FBFE'

},
myButton:
{
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius:50,
    padding: 20,
    margin: 15            
},




}); 
 export default Login;
