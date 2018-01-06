import { StyleSheet } from 'react-native';
import { color } from './CommonStyles';

export default StyleSheet.create({
    progressCircleContainer: {
        flex: 3,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    progressTextContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutModalClose: {
        fontSize: 13.5,
        color: color.white,
        fontWeight: 'bold',
    },
    modalContent: {
        height: '50%',
        backgroundColor: color.white,
        paddingTop: 20,
        borderRadius: 10,
        borderColor: color.gray,
    },
    modalButton: {
        backgroundColor: color.blue,
        borderTopWidth : 1,
        flex: 1,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    devImgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    devImg: {
        width: 70,
        height: 70,
        alignSelf: "auto",
        borderRadius: 35,    
    },
    devName: {
       
        fontSize: 12,
    },
    devBioHeading: {
        fontStyle: 'italic',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    devBio: {
        fontStyle: 'italic',
        marginTop: 5,
        marginLeft: 12,
        marginRight: 12,
        textAlignVertical: 'center',
        textAlign:'center',
    }
});

