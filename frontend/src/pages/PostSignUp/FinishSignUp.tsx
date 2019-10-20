import React, { FunctionComponent } from 'react';
import Progress from './Progress';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import { PATHS } from 'routes';
import './PostSignUp.style.scss';

const FinishSignUp: FunctionComponent = props => {
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
        <Link to={PATHS.DASHBOARD}>
          <Button>Go to my dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishSignUp;
