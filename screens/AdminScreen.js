import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors.js';
import { adminStyles } from '../styles/adminStyles.js';

const AdminScreen = () => {
    const users = [
        { id: '1', name: 'User1', question: 'What character?', answer: 'Strong character' },
        { id: '2', name: 'User2', question: 'What character?', answer: 'Strong character' },
        { id: '3', name: 'User3', question: 'What character?', answer: 'Strong character' },
        { id: '4', name: 'User4', question: 'What character?', answer: 'Strong character' },
        { id: '5', name: 'User5', question: 'What character?', answer: 'Strong character' },
        { id: '6', name: 'User6', question: 'What character?', answer: 'Strong character' },
    ];

    const renderItem = ({ item }) => (
        <View style={adminStyles.userCard}>
            <Ionicons name="person-circle-outline" size={40} color={colors.brightBlue} />
            <Text style={adminStyles.userName}>{item.name}</Text>
            <Text style={adminStyles.questionText}>Q: {item.question}</Text>
            <Text style={adminStyles.answerText}>A: {item.answer}</Text>
        </View>
    );

    const handleStartGame = () => {
        console.log('Start Game pressed');
        // Add logic to start the game
    };

    const handleForceEnd = () => {
        console.log('Force End pressed');
        // Add logic to force end the game
    };

    return (
        <View style={adminStyles.container}>
            <Text style={adminStyles.title}>Admin Dashboard</Text>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={4}
                contentContainerStyle={adminStyles.gridContainer}
            />
            <View style={adminStyles.buttonContainer}>
                <TouchableOpacity style={adminStyles.button} onPress={handleStartGame}>
                    <Text style={adminStyles.buttonText}>Start Game</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[adminStyles.button, adminStyles.endButton]} onPress={handleForceEnd}>
                    <Text style={adminStyles.buttonText}>Force End</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AdminScreen;
