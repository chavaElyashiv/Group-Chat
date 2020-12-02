import React from 'react';
import './ToolbarButton.css';

export default function ToolbarButton(props) {
  debugger
    const { icon,h } = props;

    return (
      <i className={`toolbar-button ${icon}`} onClick={h} />
    );
}