import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Progress from './Progress';
import { PATHS } from 'routes';
import Button from 'components/Button';
import './PostSignUp.style.scss';

const Step1: FunctionComponent = props => {
  return (
    <div>
      <Progress step={0} />
      <h2 className="page-title">Getting started</h2>
      <p className="mb-md">
        We just need you to fill out some details on you and what help you can provide in times of
        an emergency. These details will also be used if you yourself become an evacuee.
      </p>
      <div className="nav-buttons">
        <div />
        <Link to={PATHS.POST_SIGNUP + '/2'} className="pull-right">
          <Button>Let's go&nbsp;&nbsp;→</Button>
        </Link>
      </div>
    </div>
  );
};

export default Step1;
