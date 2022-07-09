import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

function Input({
  type, name, label, id, error,
}) {
  return (
    <div className="block mb-2">
      <label className="block text-sm font-medium text-slate-700" htmlFor={id}>
        {label}
      </label>
      <Field
        id={id}
        type={type}
        name={name}
        className="block w-full px-2 h-10 rounded border border-slate-900 focus:outline-amber-400 invalid:border-red-800"
      />
      <ErrorMessage name={name} component="span" className="block text-red-700 text-xs">
        {error}
      </ErrorMessage>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['number', 'text']).isRequired,
};

Input.defaultProps = {
  label: '',
  error: '',
  name: '',
};

export default Input;
