import React from 'react';
import logo from './logo.svg';

function Input(props) {
  let json = props.json;
  return (
    <React.Fragment>
      <div className="input-container">
        <input type={json.type} key={json.name} name={json.name} placeholder={json.name}/>
      </div>
    </React.Fragment>
  );
}

export default Input;
