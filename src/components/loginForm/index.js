import React, { Component, PropTypes } from 'react'
import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Item, Input, Content, Button, Text, Label } from 'native-base'
import { Field,reduxForm } from 'redux-form'
import styles from './styles'
import { image } from '../../assets/images.register';
import Spinner from '../spinner'

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


class LoginForm extends Component {

  renderInput({ input, label, type, secureTextEntry, meta: { touched, error } }) {
    var hasError = false;
    if(touched && error) {
      hasError= true;
    }
    return(
      <View>
        <Item error={hasError} floatingLabel>
          <Label style={styles.inputText}>{label}</Label>
          <Input
            autoCapitalize={'none'}
            autoCorrect={false}
            type={type}
            secureTextEntry={secureTextEntry}
            style={styles.inputText}
            {...input}/>
        </Item>
        {hasError ? <Text style={styles.error}>{error}</Text> : <Text />}
      </View>)
  }

  signIn() {
    Keyboard.dismiss();
    const { handleSubmit, loginRequest } = this.props;
    const loginEx = (values) => loginRequest(values);
    handleSubmit(loginEx)();
  }

  render() {
     const { showSpinner } = this.props;

     return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.loginContainer}>
            <Spinner visible={showSpinner}/>
            <Field name="email" type="email" label="Email" component={this.renderInput} />
            <Field name="password" type="password" secureTextEntry label="Password" component={this.renderInput} />
            <Button block bordered info onPress={this.signIn.bind(this)}
              style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Submit</Text>
            </Button>
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
