import React from 'react';
// import ContactList from '../ContactList';
import './ToolbarButton.css';

export default function ToolbarButton(props) {
  debugger
    const { icon } = props;
    const h=props.onClick;
    
    // function j() {
    //   debugger;
    //   alert("you clicked")
    //   h();
    //   // return (<ContactList/>)
    // }
    return (
      
      <i className={`toolbar-button ${icon}`} onClick={h} />
    );
}