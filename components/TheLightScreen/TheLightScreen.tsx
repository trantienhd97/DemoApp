import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Dimensions, Image, StyleSheet, Switch, View} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TheLightScreen () {
    const [state, setState] = React.useState<boolean>(false);

    const handleChangeState = (text: number) => () => {
        setState(!state);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={state ? require('../../assets/Image/bulb-on.jpg') : require('../../assets/Image/bulb-off.jpg')}
                             style={{width: windowWidth - 10, height: windowHeight - 200, resizeMode: 'contain'}}/>
            <Switch thumbColor={state ? "#fffs" : "#f4f3f4"} trackColor={{ false: "#fff", true: "#00cc00" }}
                    ios_backgroundColor="#3e3e3e" value={state} onValueChange={handleChangeState(1)} style={styles.switch}>
            </Switch>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    switch: {
        marginTop: 30,
    },
});
