import React from 'react'
import { StyleSheet, View } from 'react-native'
import strings from '../../constants/strings'
import Header from './components/Header'
import Button from './components/Button'
import ImagePicker from 'react-native-image-crop-picker';

const MainScreen = ({navigation}) => {

    const navigateSettingsHandler = () => {
        navigation.navigate(strings.screens.settings)
    }

    const bluetoothPressHandler = () => {

    } 

    const cameraPresshandler = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        }).catch(err => {
            console.log(err)
        });
    }

    const galleryPressHandler = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <View style={styles.screen}>
            
            <Header
                headerTitle={strings.main.headerTitle}
                onSettingsPress={navigateSettingsHandler}
            />

            <View style={styles.buttons}>
                
                <Button
                    onPress={bluetoothPressHandler}
                    iconName="bluetooth"
                    buttonLabel="BLUETOOTH"
                />

                <Button
                    onPress={cameraPresshandler}                    
                    iconName="camera"
                    buttonLabel="CAMERA"
                />

                <Button
                    onPress={galleryPressHandler}
                    iconName="image"
                    buttonLabel="GALLERY"
                />
            
            </View>
            
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        marginHorizontal : 15
    },
    buttons : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
