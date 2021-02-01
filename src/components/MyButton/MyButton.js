import React from 'react';
import './MyButton.css';

function MyButton({ type, children, ...rest }) {
  return (
    <button className={`button ${type}`} {...rest}>
      {children}
    </button>
  );
}

export default MyButton;
