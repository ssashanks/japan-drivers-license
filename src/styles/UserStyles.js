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
    //modal start
    modal: {
        backgroundColor: color.white,
        borderColor: color.gray,
        borderRadius: 10,
        height: 200,
    },
    modalContent: {
        backgroundColor: color.white,
        borderColor: color.gray,
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalMsg: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 19,
        textAlign: 'center',        
    },
    modalButtonText: {
        fontSize: 13.5,
        color: color.white,
        fontWeight: 'bold',
    },
    modalFooter: {
        flexDirection: 'row',
        height: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    modalHalfRed: {
        backgroundColor: color.red,
        flex: 1,
        borderTopWidth : 1,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
    },
    modalHalfBlue: {
        backgroundColor: color.blue,
        flex: 1,
        borderTopWidth : 1,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 10,
    },
    modalFullBlue: {
        backgroundColor: color.blue,
        flex: 1,
        borderTopWidth : 1,
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

