import {
    Dimensions,
    FlatList, Image,
    ListRenderItem,
    ListRenderItemInfo,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from "react";
import StoriesList from '../../SampleData/StoriesData.json';

import Stories from "./Stories/Stories";
import ContentView from "./ContentView/ContentView";

export interface StoriesType {
    id?: number;
    name?: string;
    uri?: any;
    lastUpdate?: string;
    viewNumber?: string;
    like?: boolean;
}

const dataStories = StoriesList;

export default function InstagramScreen() {

    const handleClickCreateNew = () => {
        alert('Tạo stories mới');
    }

    const handleShowStoreDetail = () => {
        alert('Hiển thị chi tiết');
    }

    const [data, setData] = React.useState<StoriesType[]>(dataStories);

    const handleLike = (item: StoriesType)=> () => {
        const dataNew: StoriesType[] = dataStories.map(
            (itemCurrent) => itemCurrent?.id === item?.id ? {...itemCurrent, like: !item.like} : itemCurrent);
        setData(dataNew);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity><Feather name="camera" size={24} color="black" /></TouchableOpacity>
                <View style={{justifyContent: "center"}}>
                    <Image source={require('../../assets/Image/instagram.jpg')} style={{ height: 24, resizeMode: 'contain'}}/>
                </View>
                <TouchableOpacity><Feather name="send" size={24} color="black" /></TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.scrollView}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {dataStories.map((item) => <Stories key={item?.id} item={item} plus={item?.id === 0} onClickPlus={handleClickCreateNew} onClick={handleShowStoreDetail}/>)}
                    </ScrollView>
                </View>
                <View>
                    {data.map((item) =>
                        <ContentView key={item?.id} item={item} onLike={handleLike(item)}/>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    scrollView: {
        padding: 16,
        borderWidth: 2,
        borderColor: '#e1e1ea',
        backgroundColor: '#f0f0f5',
    },
});
