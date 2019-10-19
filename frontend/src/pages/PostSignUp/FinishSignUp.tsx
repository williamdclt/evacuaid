import React, { FunctionComponent, useState, useCallback } from 'react';
import Progress from './Progress';
import Button from 'components/Button';
import { RadioGroup, Radio } from '@blueprintjs/core';
import { TEXT_MUTED } from '@blueprintjs/core/lib/esm/common/classes';
import { Link } from 'react-router-dom';
import { PATHS } from 'routes';
import './PostSignUp.style.scss';
import CheckboxGroup from './CheckboxGroup';
import GraphicCheckbox from './GraphicCheckbox';

enum NEED_RESOURCES {
  PHARMACY = 'FIRST_AID',
  DOCTOR = 'FOOD_WATER',
  TRANSPORT = 'TRANSPORT',
}

const FinishSignUp: FunctionComponent = props => {
  const [offeredResources, setOfferedResources] = useState<string[]>([]);

  return (
    <div>
      <Progress step={6} />
      <h2 className="page-title">Set up complete!</h2>
      <p className="mb-md">
        Thanks, now that we have your information, in the time of a crisis we will be able to better
        match evacuees with your, or to get you help as an evacuee.You can now see your dashboard,
        which has all your details listed, as well as information for the nearest Collectives near
        you.
      </p>
      <div className="nav-buttons">
        <Link to={PATHS.HOME}>
          <Button>Go to my dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishSignUp;
