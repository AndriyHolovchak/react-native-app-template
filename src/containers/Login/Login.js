import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native';
import { Link } from 'react-router-native'
import { Content } from 'native-base';

import LoginForm from '../../components/loginForm'

export default class Login extends Component {

  render() {
    return (
      <Content>
        <LoginForm/>
      </Content>
    )
  }
}
