
import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
export default function SpinnerWait(props) {
  
    return (
        <>
      <div>
        
        <Spinner animation="grow" variant="info" />
      </div>
      <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
     
    </Spinner>
    </>
    );
}