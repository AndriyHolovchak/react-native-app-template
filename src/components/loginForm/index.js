import React, { Component, PropTypes } from 'react'
import { View, Image, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native'
import { Item, Input, Content, Button, Text, Label } from 'native-base'
import { Field,reduxForm } from 'redux-form'
import styles from './styles'
import { image } from '../../assets/images.register';
import Spinner from '../spinner'
import { LoginButton, AccessToken } from 'react-native-fbsdk'

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address format'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  }

  return errors;
};

class RenderInput extends Component {
  render() {
    const { input, name, label, type, secureTextEntry, onEnter, meta: { touched, error } } = this.props;
    var hasError = false;
    if(touched && error) {
      hasError= true;
    }

    return (
      <View>
        <Item error={hasError} placeholderLabel>
           <Input
            ref={type}
            autoCapitalize={'none'}
            autoCorrect={false}
            type={type}
            secureTextEntry={secureTextEntry}
            style={styles.inputText}
            onSubmitEditing={() => {onEnter()}}
            placeholder={label}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            {...input}/>
          </Item>
          {hasError ? <Text style={styles.error}>{error}</Text> : <Text />}
       </View>
      )
  }
}


class LoginForm extends Component {

  signIn() {
    Keyboard.dismiss();
    const { handleSubmit, loginRequest } = this.props;
    const loginEx = (values) => loginRequest(values);
    handleSubmit(loginEx)();
  }

  render() {
     const { showSpinner, handleSubmit } = this.props;

     return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.loginContainer}>
            <Spinner visible={showSpinner}/>
            <Field
              withRef
              name="email"
              type="email"
              label="Email"
              component={RenderInput}
              onEnter={() => {this.password.getRenderedComponent().refs.password._root.focus()}}
            />
            <Field
              withRef
              ref={(value) => this.password = value}
              name="password" type="password"
              secureTextEntry
              label="Password"
              component={RenderInput}
              onEnter={() => {this.signIn()}}
            />
            <Button block bordered info onPress={() => this.signIn()}
              style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Submit</Text>
            </Button>
            <LoginButton
              publishPermissions={["publish_actions"]}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    alert("login is cancelled.");
                  } else {
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        alert(data.accessToken.toString())
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => alert("logout.")}/>
          </View>
        </TouchableWithoutFeedback>
      )
    }
}

LoginForm.propTypes = {
    loginRequest: PropTypes.func.isRequired,
    showSpinner: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'test',
  validate
})(LoginForm)
