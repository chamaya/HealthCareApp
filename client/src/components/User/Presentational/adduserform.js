import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField, Button} from '@material-ui/core';
const NAME = "name";
const DOB = "dob";
const EMAIL = 'email';

const validate = values => {
  const errors = {}
  const requiredFields = [
    NAME,
    DOB,
    EMAIL,
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if ( values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
      errors.email = 'Invalid email address'
  }
  const dateRegEx = /^(19|20)\d\d[-/.](0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])$/;
  if(values.dob && !values.dob.match(dateRegEx)){
    errors.dob = 'Invalid Date Format'
  }
    
  return errors
}


const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

let AddUserInfoForm = props => {
    const { handleSubmit, isAdding, pristine, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name={NAME}
            component={renderTextField}
            label="Name"
          />
        </div>
        <div>
          <Field
              name={DOB}
              component={renderTextField}
              label="DOB in YYYY-MM-DD"
          />
        </div>
        <div>
          <Field name={EMAIL} component={renderTextField} label="Email" />
        </div>
        <Button type="submit"  variant="contained" disabled={pristine || submitting}>Submit</Button> { isAdding ? "PROCESSING": "" }
      </form>
    )
}

AddUserInfoForm = reduxForm({
  // a unique name for the form
  form: 'AddUserInfo',
  validate
})(AddUserInfoForm)

export default AddUserInfoForm