import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native';
import { Link } from 'react-router-native'
import { Content } from 'native-base';

import LoginForm from '../../components/loginForm'
import styles from './styles'
import { image } from '../../assets/images.register';

export default class Login extends Component {

  render() {
    return (
      <Image source={image.login_background} style={styles.background}>
        <Content style={styles.backgroundShadow} keyboardShouldPersistTaps="always" extraScrollHeight={50}>
          <LoginForm {...this.props}/>
        </Content>
      </Image>
    )
  }
}
