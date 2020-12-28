import React from 'react';
import './ToolbarButton.css';

export default function ToolbarButton(props) {
  const { icon } = props;
  const h = props.onClick;

  
  return (

    <i className={`toolbar-button ${icon}`} onClick={h} />
  );
}