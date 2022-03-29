import React from 'react'
import {View, Text, Image, StyleSheet, Button, TextInput} from 'react-native'
import {StackActions} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addDataStorage, getData, USER_KEY} from "../service/StorageService"


export default function Login({navigation}) {
    const [email, majEmail] = React.useState('admin@ex.com')
    const [pwd, majPwd] = React.useState('admin')
    const storeData = async (key, data) => {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const submit = () => {
        const url = `http://10.113.129.172:3000/user?email=${email}&password=${pwd}`;
        fetch(url)
            .then((response) => {
                response.json()
                    .then((data) => {
                        if (data.length) {
                            addDataStorage(USER_KEY, data[0]).then(r => 'success');

                            navigation.dispatch(StackActions.replace('home'))
                        } else {

                        }
                    })
            })
    }
    return (
        <View>
            <Text>Bonjour</Text>
            <TextInput
                style={styles.input}
                onChangeText={majEmail}
                value={email}
                keyboardType={'email-address'}
            />
            <TextInput
                style={styles.input}
                onChangeText={majPwd}
                value={pwd}
                secureTextEntry={true}
            />
            <Button title={'connexion'} onPress={submit}/>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 3
    }
})
