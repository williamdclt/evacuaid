import React from 'react';

export const CheckboxContext = React.createContext<{
  selectedValues: string[];
  toggleSelected: (name: string) => void;
}>({ selectedValues: [], toggleSelected: () => {} });
