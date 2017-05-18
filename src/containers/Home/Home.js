import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default class Home extends Component {

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home SCREEN</Text>
        <Text style={{color: 'red'}}>Home SCREEN</Text>

        <Text onPress={() => this.props.push('/login')}>Go To Login</Text>
      </View>
    )
  }
}
