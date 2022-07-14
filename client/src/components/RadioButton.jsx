import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

function RadioButton(props) {
  const {
    name, label, value, id, error,
  } = props;
  return (
    <>
      <label htmlFor={id} className="mr-2">
        <Field className="mr-1" id={id} type="radio" name={name} value={value} />
        {label}
      </label>
      <ErrorMessage name={name} component="span" className="block text-red-700 text-xs">
        {error}
      </ErrorMessage>
    </>
  );
}

RadioButton.propTypes = {
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
};

export default RadioButton;
