import React, { FunctionComponent } from 'react';
import { ProgressBar } from '@blueprintjs/core';
import Progress from './Progress';

const Step1: FunctionComponent = props => {
  return (
    <div>
      <Progress step={1} />
      <h2 className="page-title">Getting started</h2>
      We just need you to fill out some details on you and what help you can provide in times of an
      emergency. These details will also be used if you yourself become an evacuee.
    </div>
  );
};

export default Step1;
