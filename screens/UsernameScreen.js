import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors.js';
import { usernameStyles } from '../styles/usernameStyles.js';

const UsernameScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = () => {
        if (username.trim()) {
            if (username === 'DouglasAdmin3917438') {
                navigation.navigate('Admin');
            } else {
                navigation.navigate('Lobby', { username });
            }
        }
    };

    return (
        <View style={usernameStyles.container}>
            <View style={usernameStyles.inputContainer}>
                <Ionicons name="person-outline" size={24} color={colors.brightBlue} style={usernameStyles.icon} />
                <TextInput
                    style={usernameStyles.input}
                    placeholder="Enter your username"
                    placeholderTextColor={colors.darkGray}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <TouchableOpacity style={usernameStyles.button} onPress={handleSubmit}>
                <Text style={usernameStyles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UsernameScreen;
