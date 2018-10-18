/* global alert */

import React, { Component } from 'react';
import { availableIntervalsPerAnnum, display } from '../model/interval.js';

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
    const { epoch, intervalsPerAnnum, intervalCount } = dates;
    const startDate = epoch.toISOString().substring(0, 10);
    const years = intervalCount / intervalsPerAnnum;
    return {
      intervalsPerAnnum,
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
    const { intervalsPerAnnum } = state;
    return availableIntervalsPerAnnum.map((intervalsPerAnnumOption) => {
      const inputProps = {
        checked: (intervalsPerAnnum === intervalsPerAnnumOption),
        id: intervalsPerAnnumOption,
        name: 'intervalsPerAnnum',
        onChange: this.updateLocalModel.bind(null, 'intervalsPerAnnum', intervalsPerAnnumOption),
        type: 'radio',
        value: intervalsPerAnnumOption
      };
      return (
        <span key={intervalsPerAnnumOption}>
          <input {...inputProps} />
          <label htmlFor={intervalsPerAnnumOption}>{display(intervalsPerAnnumOption)}</label>
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
          <label htmlFor='intervalsPerAnnum'>Calculate every</label>
          {this.renderIntervalOptions()}
        </div>
        <button {...buttonProps}>Generate Model</button>
      </div>
    );
  }
}

export default ModelSetup;
