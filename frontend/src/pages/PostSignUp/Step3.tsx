import React, { FunctionComponent, useState, useCallback } from 'react';
import Progress from './Progress';
import Button from 'components/Button';
import { RadioGroup, Radio } from '@blueprintjs/core';
import { TEXT_MUTED } from '@blueprintjs/core/lib/esm/common/classes';
import { Link } from 'react-router-dom';
import { PATHS } from 'routes';
import './PostSignUp.style.scss';

enum ACCOMMODATION_AVAILABILITY {
  NONE = 0,
  ONE_OR_TWO = 1,
  THREE_OR_FOUR = 3,
  FIVE_OR_MORE = 5,
}

const Step3: FunctionComponent = props => {
  const [accommodationAvailability, setAvailability] = useState<ACCOMMODATION_AVAILABILITY>();

  const onAvailabilityChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) =>
      setAvailability(parseInt(event.currentTarget.value)),
    [setAvailability],
  );

  const nextPage = accommodationAvailability !== ACCOMMODATION_AVAILABILITY.NONE ? '/3/bis' : '/5';

  return (
    <div>
      <Progress step={3} />
      <h2 className="page-title">Offering accomodation</h2>
      <p className="mb-md">
        If you are willing and able to provide some rooms for future evacuees, how many people could
        you take in?
      </p>
      <p className={'mb-md ' + TEXT_MUTED}>
        Please select one option. If you need help with estimating how many people you could take
        in, we suggest a maximum of 2 people per spare room that you have.
      </p>
      <form>
        <RadioGroup
          onChange={onAvailabilityChange}
          selectedValue={accommodationAvailability}
          className="bp3-radio-group"
        >
          <Radio
            label="I am unable to offer any rooms to future evacues"
            value={ACCOMMODATION_AVAILABILITY.NONE}
          />
          <Radio
            label="I have enough space for 1 - 2 people"
            value={ACCOMMODATION_AVAILABILITY.ONE_OR_TWO}
          />
          <Radio
            label="I have enough space for 3 - 5 people"
            value={ACCOMMODATION_AVAILABILITY.THREE_OR_FOUR}
          />
          <Radio
            label="I have enough space for 5+ people"
            value={ACCOMMODATION_AVAILABILITY.FIVE_OR_MORE}
          />
        </RadioGroup>
      </form>
      <div className="nav-buttons">
        <Link to={PATHS.POST_SIGNUP + '/2'}>
          <Button>←&nbsp;&nbsp;Previous</Button>
        </Link>
        <Link to={PATHS.POST_SIGNUP + nextPage}>
          <Button>Next&nbsp;&nbsp;→</Button>
        </Link>
      </div>
    </div>
  );
};

export default Step3;
