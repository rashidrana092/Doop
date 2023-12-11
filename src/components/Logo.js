import {View, Image} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import MyTexts from './MyTexts';

const Logo = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/dooplogo.png')}
        style={{
          width: wp(50),
          height: hp(10),
          marginHorizontal: 100,
          marginTop: hp(35),
        
        }}
      />
    </View>
  );
};
export default Logo;
