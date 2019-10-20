import React, { FunctionComponent } from 'react';
import { FormGroup, Label } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { Form, reduxForm, Field } from 'redux-form';
import { PATHS } from 'routes';
import Button from 'components/Button';
import Progress from './Progress';
import './PostSignUp.style.scss';

const Step2: FunctionComponent = props => {
  return (
    <div>
      <Progress step={2} />
      <h2 className="page-title">Your address</h2>
      <p className="mb-md">First things first, what is your current address?</p>
      <Form onSubmit={() => {}}>
        <FormGroup>
          <Label>Address line 1</Label>
          <Field component="input" name="addressLine1" />
        </FormGroup>
        <FormGroup>
          <Label>Address line 2</Label>
          <Field component="input" name="addressLine2" />
        </FormGroup>
        <FormGroup>
          <Label>County / state</Label>
          <Field component="input" name="countyOrState" />
        </FormGroup>
        <FormGroup>
          <Label>Postcode</Label>
          <Field component="input" name="postCode" />
        </FormGroup>
        <FormGroup>
          <Label>Full name</Label>
          <Field component="input" name="fullName" />
        </FormGroup>
        <FormGroup>
          <Label>Phone number</Label>
          <Field component="input" name="phoneNumber" />
        </FormGroup>
      </Form>
      <div className="nav-buttons">
        <Link to={PATHS.POST_SIGNUP + '/1'}>
          <Button>←&nbsp;&nbsp;Previous</Button>
        </Link>
        <Link to={PATHS.POST_SIGNUP + '/3'}>
          <Button>Next&nbsp;&nbsp;→</Button>
        </Link>
      </div>
    </div>
  );
};

export default reduxForm({ form: 'user', destroyOnUnmount: false })(Step2);
