import React, { FunctionComponent, useState } from 'react';
import Progress from './Progress';
import Button from 'components/Button';
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

const Step5: FunctionComponent = props => {
  const [offeredResources, setOfferedResources] = useState<string[]>([]);

  return (
    <div>
      <Progress step={5} />
      <h2 className="page-title">What resources would I need?</h2>
      <p className="mb-md">
        Other than the essentials (food and shelter) is there anything that you would need as an
        evacuee? If you do not need anything extra, then click 'Next'.
      </p>
      <p className={'mb-md ' + TEXT_MUTED}>Select as many as applicable.</p>
      <form>
        <CheckboxGroup value={offeredResources} onChange={setOfferedResources}>
          <GraphicCheckbox label="Proximity to pharmacy" value={NEED_RESOURCES.PHARMACY} />
          <GraphicCheckbox
            label="Proximity to medical professionals"
            value={NEED_RESOURCES.DOCTOR}
          />
          <GraphicCheckbox label="Transport" value={NEED_RESOURCES.TRANSPORT} />
        </CheckboxGroup>
      </form>
      <div className="nav-buttons">
        <Link to={PATHS.POST_SIGNUP + '/4'}>
          <Button>←&nbsp;&nbsp;Previous</Button>
        </Link>
        <Link to={PATHS.POST_SIGNUP + '/finish'}>
          <Button>Next&nbsp;&nbsp;→</Button>
        </Link>
      </div>
    </div>
  );
};

export default Step5;
