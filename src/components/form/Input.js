import React from 'react';

function Input({ type, defaultValue, onChange, ...restAttributes }) {
  return (
    <>
      <input
        type={type}
        defaultValue={defaultValue}
        onChange={e => onChange({ value: e.target.value, name: e.target.name })}
        {...restAttributes}
      />
      {Math.floor(Math.random() * 100)}
    </>
  );
}

export default Input;
