import { StyleSheet } from 'react-native';
import { colors } from './colors.js';

export const adminStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkerGray,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.brightBlue,
        marginBottom: 20,
        textAlign: 'center',
    },
    gridContainer: {
        justifyContent: 'space-between',
    },
    userCard: {
        backgroundColor: colors.veryDarkGray,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        margin: 5,
        width: '23%',
    },
    userName: {
        color: 'white',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    questionText: {
        color: colors.brightBlue,
        marginTop: 10,
        fontSize: 12,
        textAlign: 'center',
    },
    answerText: {
        color: 'white',
        marginTop: 5,
        fontSize: 12,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        backgroundColor: colors.brightBlue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    endButton: {
        backgroundColor: '#cc0000',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
