import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { Header, Title, Body } from 'native-base';
import styles from './styles'

export default class Home extends Component {

  render() {
    return (
      <Header>
          <Body>
              <Title>Header</Title>
          </Body>
      </Header>
    )
  }
}
