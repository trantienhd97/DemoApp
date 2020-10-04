import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function MomoScreen() {
    const [password, setPassword] = React.useState('');

    const [showPassword, isShowPassword] = React.useState(false);

    const handleChangePassword = React.useCallback((text) => {
        if (text) {
            setPassword(text);
        }
    }, []);

    const handleLogin = React.useCallback(() => {
        if (password === '123@123a') {
            alert('Thành công');
        } else {
            alert('Thất bại');
        }
    }, [password]);

    const handleShowPassword = React.useCallback(() => {
        isShowPassword(!showPassword);
    }, [showPassword]);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.viewHeader}>
                <View style={styles.viewHeaderChild}>
                    <Text style={[styles.textHeader, {fontSize: 20, marginBottom: 12}]}>Xin chào</Text>
                    <Text style={[styles.textHeader, {fontSize: 14, marginBottom: 12}]}>Trần Tiến</Text>
                    <Text style={styles.textHeader}>0399543531</Text>
                </View>
            </View>
            <View style={styles.viewInput}>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput onChangeText={handleChangePassword} secureTextEntry={!showPassword} placeholder={'Nhập mật khẩu'} style={styles.textInput} />
                        <AntDesign name="lock" size={24} color="black" style={{position: 'absolute', marginLeft: 10}}/>
                        <TouchableOpacity style={{position: 'absolute', marginLeft: 10, right: 10}} onPress={handleShowPassword}>
                            <AntDesign name="eyeo" size={24} color="black"/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.login} onPress={handleLogin}>
                        <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewBottom}>
                    <TouchableOpacity onPress={() => {alert('Quên mật khẩu')}}>
                        <Text style={styles.textBottom}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {alert('Thoát tài khoản')}}>
                        <Text style={styles.textBottom}>Thoát tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9e005b',
    },
    viewHeaderChild: {
        alignItems: 'center',
    },
    viewHeader: {
        flex: 1,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textHeader: {
      color: '#fff'
    },
    viewInput: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
    },
    textInput: {
        paddingLeft: 40,
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 50,
        width: windowWidth - 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewBottom: {
        marginTop: 24,
        width: windowWidth - 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 14,
        marginRight: 14,
    },
    textBottom: {
        color: '#fff',
        fontSize: 16
    },
    login: {
        height: 45,
        backgroundColor: '#800040',
        marginTop: 16,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogin: {
      color: '#fff',
    },
});
