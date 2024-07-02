import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors.js';
import { questionStyles } from '../styles/questionStyles.js';

const QuestionScreen = () => {
    const [isActive, setIsActive] = useState(false);
    const [answer, setAnswer] = useState('');

    return (
        <View style={[questionStyles.container, isActive ? questionStyles.activeContainer : questionStyles.waitingContainer]}>
            {isActive ? (
                <>
                    <View style={questionStyles.questionBox}>
                        <Text style={questionStyles.questionText}>What is the capital of France?</Text>
                    </View>
                    <TextInput
                        style={questionStyles.input}
                        placeholder="Enter your answer"
                        placeholderTextColor={colors.darkGray}
                        value={answer}
                        onChangeText={setAnswer}
                    />
                    <Ionicons name="checkmark-circle-outline" size={40} color={colors.brightBlue} />
                </>
            ) : (
                <View style={questionStyles.waitingContent}>
                    <Ionicons name="hourglass-outline" size={40} color={colors.brightBlue} />
                    <Text style={questionStyles.waitingText}>Wait your turn</Text>
                </View>
            )}
        </View>
    );
};

export default QuestionScreen;
