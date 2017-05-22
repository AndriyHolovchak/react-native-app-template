import React, { Component, PropTypes } from 'react'
import { View, Image } from 'react-native'
import { Item, Input, Content, Button, Text, Label } from 'native-base'
import { Field,reduxForm } from 'redux-form'
import styles from './styles'
import { image } from '../../assets/images.register';

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
          <Input type={type} {...input} secureTextEntry={secureTextEntry} style={styles.inputText}/>
        </Item>
        {hasError ? <Text style={styles.error}>{error}</Text> : <Text />}
      </View>)
  }
  render(){
     const { handleSubmit, reset } = this.props;

     //const loginEx = (values) => console.log(values)

     return (
        <View style={styles.loginContainer}>
            <Field name="email" type="email" label="Email" component={this.renderInput} />
            <Field name="password" type="password" secureTextEntry label="Password" component={this.renderInput} />
            <Button block bordered info onPress={reset}
              style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Submit</Text>
            </Button>
        </View>
      )
    }
}
export default reduxForm({
  form: 'test',
  validate
})(LoginForm)
