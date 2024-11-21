import React from 'react';

const CustInput = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  icon,
  ...props
}) => {
  return (
    <div className={`custom-input ${className || ''}`}>
      {icon && (
        <div className="custom-input__icon">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="custom-input__field"
        {...props}
      />
    </div>
  );
};

export default CustInput;
