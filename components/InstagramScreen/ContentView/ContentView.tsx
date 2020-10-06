import React from 'react';
import {Image, View, StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native";
import { AntDesign, FontAwesome, Feather} from '@expo/vector-icons';


export interface ContentViewProps {
    item?: any;

    onClickAvatar?(): void;

    viewContent?(): void;

    onLike?(): void;

    onShowMessage?(): void;

    isMessage?: boolean;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Math.floor((windowWidth - 1) / 1);

export default function ContentView (props: ContentViewProps) {
    const {item, onClickAvatar, viewContent, onLike, onShowMessage, isMessage} = props;

    return (
        <View>
            <View style={styles.titleView}>
                <View style={styles.titleViewLeft}>
                    <TouchableOpacity onPress={onClickAvatar}>
                        <Image source={{uri: item?.uri ? item?.uri : 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}} style={{height: 30, width: 30, borderRadius: 50}} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontWeight: 'bold', marginLeft: 10}}>{item?.name}</Text>
                    </View>
                </View>
                <TouchableOpacity><AntDesign name="ellipsis1" size={24} color="black" /></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={viewContent}>
                <Image source={{uri: item?.uri ? item?.uri : 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}} style={{height: windowHeight, width: windowWidth}} />
            </TouchableOpacity>
            <View style={styles.viewIconBottom}>
                <View style={styles.viewIcon}>
                    <TouchableOpacity onPress={onLike}>{item?.like ? <FontAwesome name="heart" size={24} color="red" /> : <FontAwesome name="heart-o" size={24} color="black" />}</TouchableOpacity>
                    <TouchableOpacity onPress={onShowMessage}><Feather name="message-circle" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity><Feather name="send" size={24} color="black" /></TouchableOpacity>
                </View>
                <TouchableOpacity><Feather name="bookmark" size={24} color="black" /></TouchableOpacity>
            </View>
            <Text style={styles.viewNumber}>{item?.viewNumber}</Text>
            <Text style={{marginLeft: 20, marginTop: 10}}>{item?.lastUpdate}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleViewLeft: {
       flexDirection: 'row',
       justifyContent: 'center',
        alignItems: 'center',
   },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    viewIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '25%'
    },
    viewIconBottom: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewNumber: {
        marginLeft: 20,
        fontWeight: 'bold',
    }
});
