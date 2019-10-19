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

enum RESOURCES {
  FIRST_AID = 'FIRST_AID',
  FOOD_WATER = 'FOOD_WATER',
  TRANSPORT = 'TRANSPORT',
}

const Step4: FunctionComponent = props => {
  const [offeredResources, setOfferedResources] = useState<string[]>([]);

  return (
    <div>
      <Progress step={4} />
      <h2 className="page-title">What resources can I offer?</h2>
      <p className="mb-md">
        What kind of resources can you offer evacuees? If you cannot currently offer any resources,
        just click 'Next'.
      </p>
      <p className={'mb-md ' + TEXT_MUTED}>Select as many as applicable.</p>
      <form>
        <CheckboxGroup value={offeredResources} onChange={setOfferedResources}>
          <GraphicCheckbox label="Basic First Aid" value={RESOURCES.FIRST_AID} />
          <GraphicCheckbox label="Food and Water" value={RESOURCES.FOOD_WATER} />
          <GraphicCheckbox label="Transport" value={RESOURCES.TRANSPORT} />
        </CheckboxGroup>
      </form>
      <div className="nav-buttons">
        <Link to={PATHS.POST_SIGNUP + '/3/bis'}>
          <Button>←&nbsp;&nbsp;Previous</Button>
        </Link>
        <Link to={PATHS.POST_SIGNUP + '/5'}>
          <Button>Next&nbsp;&nbsp;→</Button>
        </Link>
      </div>
    </div>
  );
};

export default Step4;
