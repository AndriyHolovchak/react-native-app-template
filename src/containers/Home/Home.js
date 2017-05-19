import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { Content } from 'native-base';
import styles from './styles'

export default class Home extends Component {

  render() {
    return (
      <Content>
        <Text>Home SCREEN</Text>
        <Text style={{color: 'red'}}>Home SCREEN</Text>
      </Content>
    )
  }
}
