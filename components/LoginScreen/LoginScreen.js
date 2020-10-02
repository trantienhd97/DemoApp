import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen() {
    const [password, setPassword] = React.useState('');

    const [email, setEmail] = React.useState('');

    const [showPassword, isShowPassword] = React.useState(false);

    const handleChangePassword = React.useCallback((text) => {
        if (text) {
            setPassword(text);
        }
    }, []);

    const handleChangeEmail = React.useCallback((text) => {
        if (text) {
            setEmail(text);
        }
    }, []);

    const handleLogin = React.useCallback(() => {
        if (password === '123@123a' && email === 'trantien@gmail.com') {
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
                <ImageBackground source={require('../../assets/Image/login.jpg')} style={{width: windowWidth, height: 250,  resizeMode: 'contrain'}}/>
            </View>
            <View style={styles.viewInput}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput onChangeText={handleChangeEmail} placeholder={'Email'} style={[styles.textInput, {borderTopLeftRadius: 3, borderTopRightRadius: 3}]} />
                    <AntDesign name="mail" size={18} color="black" style={{position: 'absolute', marginLeft: 10}}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput onChangeText={handleChangePassword} secureTextEntry={!showPassword} placeholder={'Nhập mật khẩu'} style={[styles.textInput, {borderTopColor: '#fff', borderTopWidth: 1, borderBottomLeftRadius: 3, borderBottomRightRadius: 3}]} />
                    <AntDesign name="lock" size={24} color="black" style={{position: 'absolute', marginLeft: 10}}/>
                    <TouchableOpacity onPress={handleShowPassword} style={{position: 'absolute', marginLeft: 10, right: 10}} >
                        <AntDesign name="eyeo" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.login} onPress={handleLogin}>
                    <Text style={{color: '#fff'}}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewBottom}>
                <View style={{alignItems: 'center', marginTop: 16}}>
                    <TouchableOpacity onPress={() => {alert('Quên mật khẩu')}}>
                        <Text style={{color: '#4267b2', marginTop: 16}}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {alert('Quay lại')}}>
                        <Text style={{color: '#4267b2', marginTop: 16}}>Quay lại</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom: 30, alignItems: 'center'}}>
                    <View style={{marginBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{height: 1, width: 200, borderTopWidth: 1, borderTopColor: 'gray'}} />
                        <View style={{position: 'absolute', marginBottom: 5, backgroundColor: '#fff', padding: 5}}>
                            <Text>HOẶC</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.create} onPress={() => {alert('Tạo tài khoản mới')}}>
                        <Text style={{color: '#fff'}}>TẠO TÀI KHOẢN MỚI</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
    },
    viewInput: {
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewBottom: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        paddingLeft: 40,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        width: windowWidth - 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        height: 45,
        backgroundColor: '#4267b2',
        marginTop: 16,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 60,
    },
    create: {
        height: 45,
        backgroundColor: '#4285F4',
        marginTop: 16,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 60,
    },

});
