import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, className, type, onClick, disabled }) => (
  <button
    onClick={ onClick }
    disabled={ disabled }
    className={ ['Button', className, type ? `Button--${type}` : null].join(' ') }
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  value: '',
  className: '',
  type: '',
  onClick: () => {},
  disabled: false,
};

export default Button;
