import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native';
import { Link } from 'react-router-native'
import RedBox from '../../components/redBox'

export default class Login extends Component {

  render() {
    return (
      <View>
        <Text>LOGIN SCREEN</Text>
        <Link to="/">
          <Text>Go To HOME</Text>
        </Link>
        <RedBox/>
      </View>
    )
  }
}
