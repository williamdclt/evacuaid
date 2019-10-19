import React, { FunctionComponent, useContext } from 'react';
import { HTMLInputProps } from '@blueprintjs/core';
import { CheckboxContext } from './checkboxContext';
import './GraphicCheckbox.scss';

interface IProps extends HTMLInputProps {
  label: string;
  value: string;
}

const GraphicCheckbox: FunctionComponent<IProps> = props => {
  const { selectedValues, toggleSelected } = useContext(CheckboxContext);
  const isSelected = props.value ? selectedValues.includes(props.value) : false;

  return (
    <div
      className={'graphic-checkbox ' + (isSelected ? 'graphic-checkbox--selected' : '')}
      onClick={e => toggleSelected(props.value)}
    >
      <div>{props.label}</div>
    </div>
  );
};

export default GraphicCheckbox;
