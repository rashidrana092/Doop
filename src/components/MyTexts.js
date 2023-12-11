import { View,Text} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MyTexts = (props) =>{
    return(

        <View>
            <Text style={{
                color: 'black',
                fontSize: 18,
                justifyContent: 'center',
                textAlign: 'center',
                marginVertical:hp(1),
                
                }}>
                {props.header}</Text>
        </View>
    );
}

export default MyTexts;