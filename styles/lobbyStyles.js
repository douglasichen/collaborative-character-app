import { StyleSheet } from 'react-native';
import { colors } from './colors.js';

export const lobbyStyles = StyleSheet.create({
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
    },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.darkGray,
    },
    currentUser: {
        backgroundColor: colors.brightBlue,
    },
    userName: {
        marginLeft: 10,
        color: 'white',
        fontSize: 16,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    statusText: {
        color: colors.brightBlue,
        marginLeft: 10,
        fontSize: 16,
    },
    readyButton: {
        backgroundColor: colors.brightBlue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center',
    },
    readyButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
