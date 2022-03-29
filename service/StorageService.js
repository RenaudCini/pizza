import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const USER_KEY = 'user'


export async function addDataStorage(key, value) {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}

export async function getData(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}
