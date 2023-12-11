import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Splash from './src/screens/SplashScreen/SplashScreen';
import Boarding1 from './src/screens/OnBoarding1/OnBoarding1';
import Boarding2 from './src/screens/OnBoarding2/OnBoarding2';
import Boarding3 from './src/screens/OnBoarding3/OnBoarding3';
import Login from './src/screens/LoginScreen/Login';
import Profile from './src/screens/Profile/Profile/';
import ProfileConfirmation from './src/screens/Profile/ProfileConfirmation';
import ProfileUpdate from './src/screens/Profile/ProfileUpdate';
import Transcript from './src/screens/Transcript/Transcript';
import CalendarHome from './src/screens/Calender/CalenderHome';
import OnlineMeetingMe from './src/screens/OnlineMeeting/OnlineMeetingMe';
import OnlineMeetingThem from './src/screens/OnlineMeeting/OnlineMeetingThem';

const App=()=>{
return(

    <View style={{flex: 1}}>

   {/* <OnlineMeetingThem />    */}
     {/* <OnlineMeetingMe />  */}
      <CalendarHome />
      {/* <Transcript /> */}
       {/* <ProfileUpdate /> */}
        {/* <ProfileConfirmation /> */}
        {/* <Profile />         */}
        {/* <Login /> */}
        {/* <Splash /> */}
        {/* <Boarding1 /> */}
        {/* <Boarding2 /> */}
        {/* <Boarding3 /> */}
   
     </View>

);
}
export default App;