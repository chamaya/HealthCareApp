import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField, Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
const REC_ID = "recId";
const ISSUER = "issuer";
const STATE = 'state';
const EXPIRATION_DATE = "expirationDate";

const validate = values => {
  const errors = {};
  const requiredFields = [
    REC_ID,
    ISSUER,
    STATE,
    EXPIRATION_DATE
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  })
  if ( values.recId && isNaN(values.recId) ){
    errors.recId = "recId is not a number";
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

let MedicalCardInfoForm = props => {
    const { handleSubmit, isSubmitting, pristine, submitting, classes } = props
    return (
      <Card variant = "outlined" className={classes.card}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Container className={classes.content}>
              <Field
                name={REC_ID}
                component={renderTextField}
                label="ID Number"
              />
            </Container>
            <Container className={classes.content}>
              <Field
                  name={ISSUER}
                  component={renderTextField}
                  label="Issuer"
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

            <Container><Button type="submit"  variant="contained" disabled={pristine || submitting}>Submit</Button></Container> { isSubmitting ? "PROCESSING": "" }
          </form>
        </CardContent>
      </Card>
    )
}

MedicalCardInfoForm = reduxForm({
  // a unique name for the form
  form: 'MedicalCardInfoForm',
  validate
})(MedicalCardInfoForm)

const styles = (theme) => ({
  card: theme.card,
  content: theme.list
});

export default withStyles(styles)(MedicalCardInfoForm);