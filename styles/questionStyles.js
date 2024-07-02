import { StyleSheet } from 'react-native';
import { colors } from './colors.js';

export const questionStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    activeContainer: {
        backgroundColor: colors.almostBlack,
    },
    waitingContainer: {
        backgroundColor: colors.veryDarkGray,
    },
    questionBox: {
        backgroundColor: colors.brightBlue,
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    questionText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        backgroundColor: colors.darkGray,
        color: 'white',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    waitingContent: {
        alignItems: 'center',
    },
    waitingText: {
        color: colors.brightBlue,
        fontSize: 24,
        marginTop: 20,
    },
});
