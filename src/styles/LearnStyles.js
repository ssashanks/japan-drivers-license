import { StyleSheet } from 'react-native';
import { color } from './CommonStyles';

export default StyleSheet.create({
    listCardNameRow: {
        flexDirection: 'row'
    },
    listCardTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingBottom: 15
    },
    listCardCompletedIcon: {
        paddingTop: 4
    },
    listCardProgressText: {
        fontSize: 15,
        paddingBottom: 10
    },
    listCardProgressBarContainer: {
        paddingBottom: 20
    },
    listCardContainer: {
        justifyContent: 'center',
    },
    learnCardOptionDefault: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 15,
        borderRadius: 30, 
        borderWidth: 1,
        borderColor: color.blue,
    }
});
