import React from 'react';
import PropTypes from 'prop-types';

function ResultItem({ label, value }) {
  return (
    <div>
      <span className="mr-2">{label}</span>
      <span>{value}</span>
    </div>
  );
}
ResultItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ResultItem;
