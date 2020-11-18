import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField, Button} from '@material-ui/core';
const ID = "id";


const validate = values => {
  const errors = {}
  const requiredFields = [
    ID
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
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

let RequestUserByIDForm = props => {
    const { handleSubmit, isSetting, pristine, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name={ID}
            component={renderTextField}
            label="Search User by ID"
          />
        </div>
        <Button type="submit"  variant="contained" disabled={pristine || submitting}>Submit</Button> { isSetting ? "PROCESSING": "" }
      </form>
    )
}

RequestUserByIDForm = reduxForm({
  // a unique name for the form
  form: 'RequestUserInfoByID',
  validate
})(RequestUserByIDForm)

export default RequestUserByIDForm