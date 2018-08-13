import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  className,
  required,
  disabled,
  value,
  label,
  id,
  errorMessage,
  onChange,
  onBlur,
}) => (
  <div className="Input">
    <label className="Input-label" htmlFor={ id }>
      {label}
    </label>
    <input
      className={ ['Input-input', className].join(' ') }
      type={ type }
      required={ required }
      disabled={ disabled }
      id={ id }
      value={ value }
      onChange={ onChange }
      name={ id }
      onBlur={ onBlur }
    />
    {errorMessage && <p className="Input-error">{errorMessage}</p>}
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  label: '',
  id: '',
  errorMessage: '',
  className: '',
  onChange: () => {},
  onBlur: () => {},
  required: false,
  disabled: false,
};

export default Input;
