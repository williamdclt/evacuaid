import React, { FunctionComponent } from 'react';
import { CheckboxContext } from './checkboxContext';

interface IProps {
  value: string[];
  onChange: (value: string[]) => unknown;
}

const CheckboxGroup: FunctionComponent<IProps> = props => {
  const toggleSelected = (name: string) => {
    const index = props.value.indexOf(name);
    if (index !== -1) {
      props.onChange([...props.value.slice(0, index), ...props.value.slice(index + 1)]);
    } else {
      props.onChange([...props.value, name]);
    }
  };

  return (
    <CheckboxContext.Provider value={{ selectedValues: props.value, toggleSelected }}>
      <div className="checkbox-group">{props.children}</div>
    </CheckboxContext.Provider>
  );
};

export default CheckboxGroup;
