import React, { FunctionComponent, useState, useCallback } from 'react';
import Progress from './Progress';
import Button from 'components/Button';
import { RadioGroup, Radio } from '@blueprintjs/core';
import { TEXT_MUTED } from '@blueprintjs/core/lib/esm/common/classes';
import { Link } from 'react-router-dom';
import { PATHS } from 'routes';
import './PostSignUp.style.scss';

enum ACCOMMODATION_DURATION {
  ONE_OR_TWO_DAYS = 'ONE_OR_TWO_DAYS',
  A_WEEK = 'A_WEEK',
  A_MONTH = 'A_MONTH',
  MORE_THAN_A_MONTH = 'MORE_THAN_A_MONTH',
}

const Step3bis: FunctionComponent = props => {
  const [accommodationDuration, setDuration] = useState<ACCOMMODATION_DURATION>();

  const onAvailabilityChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) =>
      setDuration(event.currentTarget.value as ACCOMMODATION_DURATION),
    [setDuration],
  );

  return (
    <div>
      <Progress step={3} />
      <h2 className="page-title">Offering accomodation</h2>
      <p className="mb-md">How long could you take these people in for?</p>
      <p className={'mb-md ' + TEXT_MUTED}>Please select one option</p>
      <form>
        <RadioGroup
          onChange={onAvailabilityChange}
          selectedValue={accommodationDuration}
          className="bp3-radio-group"
        >
          <Radio label="1 - 2 days" value={ACCOMMODATION_DURATION.ONE_OR_TWO_DAYS} />
          <Radio label="A week" value={ACCOMMODATION_DURATION.A_WEEK} />
          <Radio label="A month" value={ACCOMMODATION_DURATION.A_MONTH} />
          <Radio label="More than a month" value={ACCOMMODATION_DURATION.MORE_THAN_A_MONTH} />
        </RadioGroup>
      </form>
      <div className="nav-buttons">
        <Link to={PATHS.POST_SIGNUP + '/3'}>
          <Button>←&nbsp;&nbsp;Previous</Button>
        </Link>
        <Link to={PATHS.POST_SIGNUP + '/4'}>
          <Button>Next&nbsp;&nbsp;→</Button>
        </Link>
      </div>
    </div>
  );
};

export default Step3bis;
