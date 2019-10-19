import React, { FunctionComponent } from 'react';
import Progress from './Progress';
import Button from 'components/Button';

const Step1: FunctionComponent = props => {
  return (
    <div>
      <Progress step={1} />
      <h2 className="page-title">Getting started</h2>
      <p>
        We just need you to fill out some details on you and what help you can provide in times of
        an emergency. These details will also be used if you yourself become an evacuee.
      </p>
      <Button className="pull-right">Let's go&nbsp;&nbsp;→</Button>
    </div>
  );
};

export default Step1;
