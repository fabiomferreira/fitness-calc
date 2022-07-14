import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

function RadioButton(props) {
  const {
    name, label, value, id,
  } = props;
  return (
    <label htmlFor={id}>
      <Field id={id} type="radio" name={name} value={value} />
      {label}
    </label>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
};

export default RadioButton;
