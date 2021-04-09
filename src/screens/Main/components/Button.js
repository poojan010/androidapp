import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View  } from 'react-native'
import colors from '../../../constants/colors'
import Feather from 'react-native-vector-icons/Feather'

const Button = (props) => {
    return (
        <View style={styles.buttonContainer}>
            
            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.button} 
                onPress={props.onPress}
            >

                <Feather
                    name={props.iconName}
                    size={50}
                    color={colors.white}
                />

            </TouchableOpacity>

            <Text style={styles.buttonLabel}>
                {props.buttonLabel}
            </Text>
        
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer : {
        marginBottom : 40,
        alignItems : 'center'
    },
    button : {
        backgroundColor : colors.primary,
        borderRadius  : 50,
        alignItems : 'center',
        padding : 25
    },
    buttonLabel : {
        marginTop : 5,
        fontSize : 14,
        lineHeight : 18
    }
})
