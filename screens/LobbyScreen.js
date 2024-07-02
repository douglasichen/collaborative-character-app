import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors.js';
import { lobbyStyles } from '../styles/lobbyStyles.js';

const LobbyScreen = ({ route, navigation }) => {
    const { username } = route.params;
    const users = ['User1', 'User2', 'User3', username]; // Dummy data

    const renderItem = ({ item }) => (
        <View style={[lobbyStyles.userItem, item === username && lobbyStyles.currentUser]}>
            <Ionicons name="person" size={24} color={colors.brightBlue} />
            <Text style={lobbyStyles.userName}>{item}</Text>
        </View>
    );

    const handleReady = () => {
        navigation.navigate('Question');
    };

    return (
        <View style={lobbyStyles.container}>
            <Text style={lobbyStyles.title}>Lobby</Text>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
            <View style={lobbyStyles.statusContainer}>
                <Ionicons name="time-outline" size={24} color={colors.brightBlue} />
                <Text style={lobbyStyles.statusText}>Waiting for other players...</Text>
            </View>
            <TouchableOpacity style={lobbyStyles.readyButton} onPress={handleReady}>
                <Text style={lobbyStyles.readyButtonText}>Ready</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LobbyScreen;
