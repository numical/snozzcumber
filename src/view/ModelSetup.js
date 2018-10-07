import React, { Component } from 'react';
import intervals from '../model/interval.js';

const methods = ['renderIntervalOptions', 'updateLocalModel'];

class ModelSetup extends Component {
  constructor (props) {
    super(props);
    methods.forEach((method) => { this[method] = this[method].bind(this); });
    this.state = this.createInitialState(props);
  }

  createInitialState (props) {
    const { model } = props;
    const { dates } = model;
    const { epoch, interval, intervalCount } = dates;
    const startDate = epoch.toISOString().substring(0, 10);
    const years = intervalCount / interval.intervalsPerAnnum;
    return {
      interval,
      startDate,
      years
    };
  }

  updateLocalModel (property, value) {
    this.setState((state) => ({
      ...state,
      [property]: value
    }));
  }

  renderIntervalOptions () {
    const { state } = this;
    const { interval } = state;
    return Object.values(intervals).map((intervalOption) => {
      const { display } = intervalOption;
      const inputProps = {
        checked: (display === interval.display),
        id: display,
        name: 'interval',
        onChange: this.updateLocalModel.bind(null, 'interval', intervalOption),
        type: 'radio',
        value: interval
      };
      return (
        <span key={display}>
          <input {...inputProps} />
          <label htmlFor={display}>{display}</label>
        </span>
      );
    });
  }

  render () {
    const { state } = this;
    const { startDate, years } = state;
    const buttonProps = {
      onClick: () => alert('Clicked')
    };
    return (
      <div>
        <div>
          <label htmlFor='startDate'>Start when?</label>
          <input type='date' value={startDate} onChange={this.updateLocalModel.bind(null, 'startDate')} />
        </div>
        <div>
          <label htmlFor='years'>How many years?</label>
          <input type='number' value={years} onChange={this.updateLocalModel.bind(null, 'years')} />
        </div>
        <div>
          <label htmlFor='interval'>Calculate every</label>
          {this.renderIntervalOptions()}
        </div>
        <button {...buttonProps}>Generate Model</button>
      </div>
    );
  }
}

export default ModelSetup;
