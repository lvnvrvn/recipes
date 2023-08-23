import Select from 'react-select';

const multiSelectStyles = {
  container: (baseStyles) => ({
    ...baseStyles,
    width: '100%',
  }),
};

export const MultiSelect = ({ selectOptions, onChange }) => (
  <Select
    closeMenuOnSelect={false}
    isMulti
    options={selectOptions}
    styles={multiSelectStyles}
    onChange={onChange}
  />
);
