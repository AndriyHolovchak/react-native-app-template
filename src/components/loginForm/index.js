import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { Item, Input, Content, Button, Text, Label } from 'native-base'
import { Field,reduxForm } from 'redux-form'
import styles from './styles'

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

  renderInput({ input, label, type, meta: { touched, error } }) {
    var hasError = false;
    if(touched && error) {
      hasError= true;
    }
    return(
      <View>
        <Item error={hasError} floatingLabel>
          <Label>{label}</Label>
          <Input type={type} {...input}/>
        </Item>
        {hasError ? <Text style={styles.error}>{error}</Text> : <Text />}
      </View>)
  }
  render(){
     const { handleSubmit, reset } = this.props;

     //const loginEx = (values) => console.log(values)

     return (
        <Content padder>
            <Field name="email" type="email" label="Email" component={this.renderInput} />
            <Field name="password" type="password" label="Password" component={this.renderInput} />
            <Button block light onPress={reset} style={{marginVertical: 20}}>
              <Text>Submit</Text>
            </Button>
        </Content>
      )
    }
}
export default reduxForm({
  form: 'test',
  validate
})(LoginForm)
