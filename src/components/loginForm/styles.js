import { Dimensions } from 'react-native'
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const styles = {
    loginContainer: {
      height: ScreenHeight,
      padding: 30,
      flex: 1,
      justifyContent: 'center'
    },
    error: {
        fontWeight: '200',
        fontStyle: 'italic',
        marginBottom: 10,
        textAlign: 'right',
        paddingRight: 5,
        color: '#fff'
    },
    loginBtn: {
      marginVertical: 20,
      borderColor: '#fff'
    },
    loginBtnText: {
      color: '#fff'
    },
    inputText: {
      color: '#fff'
    }
};

export default styles;
