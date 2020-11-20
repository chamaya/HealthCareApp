import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField, Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
const GOV_ID = "govId";
const STATE = 'state';
const EXPIRATION_DATE = "expirationDate";

const validate = values => {
  const errors = {};
  const requiredFields = [
    GOV_ID,
    STATE,
    EXPIRATION_DATE
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  })
  if ( values.govId && isNaN(values.govId) ){
    errors.govId = "govId is not a number";
  }
  if(values.state && values.state.length !== 2){
    errors.state = "Invalid State";
  }
  if ( values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
      errors.email = 'Invalid email address';
  }
  const dateRegEx = /^(19|20)\d\d[-/.](0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])$/;
  if(values.expirationDate && !values.expirationDate.match(dateRegEx)){
    errors.dob = 'Invalid Date Format';
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

let GovernmentIdInfoForm = props => {
    const { handleSubmit, isSubmitting, onCancel, pristine, submitting, classes } = props
    return (
      <Card variant = "outlined" className={classes.card}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Container className={classes.content}>
              <Field
                name={GOV_ID}
                component={renderTextField}
                label="ID Number"
              />
            </Container>
            <Container className={classes.content}>
              <Field
                  name={STATE}
                  component={renderTextField}
                  label="State"
              />
            </Container>
            <Container className={classes.content}>
              <Field
                  name={EXPIRATION_DATE}
                  component={renderTextField}
                  label="Exp Date YYYY-MM-DD"
              />
            </Container>

            <Container>
              <Button type="submit"  variant="contained" disabled={pristine || submitting}>Submit</Button>
              <Button  variant="contained" onClick = { onCancel }>Cancel</Button>
              </Container> { isSubmitting ? "PROCESSING": "" }
          </form>
        </CardContent>
      </Card>
    )
}

GovernmentIdInfoForm = reduxForm({
  // a unique name for the form
  form: 'GovernmentIdInfoForm',
  validate
})(GovernmentIdInfoForm)


const styles = (theme) => ({
  card: theme.card,
  content: theme.list
});

export default withStyles(styles)(GovernmentIdInfoForm);