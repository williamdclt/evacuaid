import React, { FunctionComponent } from 'react';
import { ProgressBar, IProgressBarProps } from '@blueprintjs/core';
import { NUMBER_OF_STEPS } from './constants';
import styled from 'styled-components';

interface IProps extends IProgressBarProps {
  step: number;
}

const ProgressContainer = styled.div`
  margin-bottom: 4rem;
`;

const Progress: FunctionComponent<IProps> = ({ step, ...progressProps }) => {
  return (
    <ProgressContainer>
      <div className="progress__label">
        <em>Step {step}</em> of {NUMBER_OF_STEPS}
      </div>

      <ProgressBar
        animate={false}
        stripes={false}
        intent="success"
        {...progressProps}
        value={1 / NUMBER_OF_STEPS}
      />
    </ProgressContainer>
  );
};
export default Progress;
