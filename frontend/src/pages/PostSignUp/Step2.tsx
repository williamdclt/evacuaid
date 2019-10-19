import React, { FunctionComponent } from 'react';
import Progress from './Progress';
import Button from 'components/Button';
import { FormGroup, Label, InputGroup } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { PATHS } from 'routes';
import './PostSignUp.style.scss';

const Step2: FunctionComponent = props => {
  return (
    <div>
      <Progress step={1} />
      <h2 className="page-title">Your address</h2>
      <p className="mb-md">First things first, what is your current address?</p>
      <form>
        <FormGroup>
          <Label>Address line 1</Label>
          <InputGroup />
        </FormGroup>
        <FormGroup>
          <Label>Address line 2</Label>
          <InputGroup />
        </FormGroup>
        <FormGroup>
          <Label>County / state</Label>
          <InputGroup />
        </FormGroup>
        <FormGroup>
          <Label>Postcode</Label>
          <InputGroup />
        </FormGroup>
      </form>
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

export default Step2;
