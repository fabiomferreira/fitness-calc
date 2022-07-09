import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, submit, disabled }) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className="disabled:opacity-50 py-2 w-full px-2 bg-slate-900 rounded text-amber-400 font-semibold text-lg my-2"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  submit: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
