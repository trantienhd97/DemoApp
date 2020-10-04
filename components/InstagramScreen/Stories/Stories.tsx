import React from 'react';
import {Image, Text, StyleSheet, TouchableOpacity, View} from "react-native";
import { Entypo } from '@expo/vector-icons';

export interface StoriesProps {
    onClick?(): void;

    plus?: boolean;

    item: any;

    onClickPlus?(): void;
}

export default function Stories (props: StoriesProps) {

    const {onClick, plus, item, onClickPlus} = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.containerChild, {marginLeft: 15}]} onPress={plus ? onClickPlus : onClick} >
                {item.uri ? <Image source={{uri: item?.uri}} style={styles.image}/> :
                    <Image source={{uri: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}}
                           style={styles.image}
                    />
                }
                {plus &&<TouchableOpacity style={styles.plus} onPress={onClickPlus}>
                    <Entypo name="plus" size={20} color="#fff" />
                </TouchableOpacity>}
            </TouchableOpacity>
            <Text style={{marginLeft: 15, marginTop: 5}}>{plus ? 'Tin của bạn' : item?.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerChild: {
        width: 75,
        height: 75,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: 'red',
    },
    imageDefault: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    plus: {
        position: 'absolute',
        right: 1,
        bottom: 1,
        width: 24,
        height: 24,
        borderRadius: 50,
        backgroundColor: '#33ccff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
