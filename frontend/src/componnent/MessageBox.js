import React from 'react';

export default function MessageBox(props) {
  return (
    <div className={`palert palert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  );
}