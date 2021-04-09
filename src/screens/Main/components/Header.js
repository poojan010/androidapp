import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import colors from '../../../constants/colors' 

const Header = (props) => {
    return (
        <View style={styles.header}>
            
            <AntDesign 
                name="infocirlceo"
                size={30}
                onPress={props.onInfoPress}
                color={colors.primary}
            />

            <Text style={styles.headerTitle}>
                {props.headerTitle}
            </Text>

            <Octicons 
                name="settings"
                size={30}
                onPress={props.onSettingsPress}
                color={colors.primary}
            />

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header : {
        marginVertical : 15,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    headerTitle : {
        fontSize : 18,
        fontWeight : '500',
        lineHeight : 22
    }
})
