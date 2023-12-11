import { Image,View,ImageBackground,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MainBackground =(props) =>{
return(

    <View style={{flex: 1}}>
        <View >
        {props.children}
        <View >
         <Image
        
        source={require('../assets/images/CallerBackground.png')}
        resizeMode='stretch'
        style={{
            width: wp('100%'),
            height: hp('100%'),
            //backgroundColor: 'red'
           // marginTop: hp(10)
        }} 
        />
        </View>
        <View >

        <Image
        
        source={require('../assets/images/BG.png')}
        resizeMode='stretch'
        style={{
            width: wp('100%'),
            height: hp('100%'),
           // backgroundColor: 'green'
          
        //    marginTop: -hp(50)
        }} 
        />
        </View>
        
      
         </View>
    </View>
    
    );
    }
export default MainBackground;