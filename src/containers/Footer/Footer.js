import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { Footer, FooterTab, Button } from 'native-base';


export default class AppFooter extends Component {

  render() {

    return (
      <Footer>
        <FooterTab>
            <Button
              active={this.props.location == '/login'}
              onPress={() => this.props.push('/login')}>
                <Text>Login</Text>
            </Button>
            <Button
              active={this.props.location == '/'}
              onPress={() => this.props.push('/')}>
                <Text>Home</Text>
            </Button>
        </FooterTab>
      </Footer>
    )
  }
}
