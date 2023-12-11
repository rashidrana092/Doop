import { View,TouchableOpacity,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MyButtons =(props)=>{
    return(
        <View 
        style={{

            width: wp('100%'),
            height: hp('17%'),
            //backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'

    }}
>
            <TouchableOpacity
            style={{

                    width: wp('80%'),
                    height: hp('7%'),
                    backgroundColor: 'black',
                    borderRadius: 200,
                    marginVertical: 10,
                    alignItems: 'center'
                    

            }}
            >
                <Text
                style={{

                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 15
    
                }}
                >{props.buttonText}</Text>
                
            </TouchableOpacity>
        </View>

    );
}

export default MyButtons;