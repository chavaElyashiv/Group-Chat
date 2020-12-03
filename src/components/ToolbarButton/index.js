import React from 'react';
import './ToolbarButton.css';

export default function ToolbarButton(props) {
  debugger
    const { icon } = props;
    function h() {
      debugger;
      alert("you clicked")
    }
    return (
      <i className={`toolbar-button ${icon}`} onClick={h} />
    );
}