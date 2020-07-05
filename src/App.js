import React from 'react';
import './App.css';
import json from './inputJSON';

class App extends React.Component {
  constructor() {
    super();
    let state_values = {};
    json.forEach((item) => {
      state_values[item.name] = ''
    });
    this.state = state_values;
  }

  onChange = (e) => {
    let value;
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }
    else {
      value = e.target.value
    }
    this.setState({
      [e.target.name]: value
    }, () => {
      console.log(this.state);
    })
  };

  submit = () => {
    this.setState({
      submit: true
    }, () => {
      console.log(this.state);
    })
  };

  render() {
    let inputs = json.map((input) => {
      if (input.conditional && input.conditional.show_if(this.state[input.conditional.name])) {
        return (
          <div className="input-container">
            <input onChange={this.onChange} value={this.state[input.name]} type={input.type} key={input.name}
                   name={input.name} placeholder={input.human_label}/>
          </div>
        )
      }
      else if (!input.conditional) {
        return (
          <div className="input-container">
            <input onChange={this.onChange} value={this.state[input.name]} type={input.type} key={input.name} name={input.name} placeholder={input.human_label}/>
          </div>
        )
      }
    });

    let submit = this.state.submit ? 'Check console for submit json' : '';

    return (
      <React.Fragment>
        <div className="input-wrapper">
          <div className="submit-alert">{submit}</div>
          <h1>TrySparrow Coding Challenge</h1>
          {inputs}
          <button className="submit-button" onClick={this.submit}>Submit</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
