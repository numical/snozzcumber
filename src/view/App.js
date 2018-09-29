import React, { Component, createRef } from 'react';
import SplitPane from 'react-split-pane';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Chart from './Chart.js';
import Grid from './Grid.js';
import ModelSetup from './ModelSetup.js';
import RawModel from './RawModel.js';
import { getViewportDimensions } from './DOM.js';
import { createExampleModel } from '../model/factory.js';
import 'react-tabs/style/react-tabs.css';
import './react-split-pane.css';

const methods = ['resizeComplete', 'resplitComplete'];

class App extends Component {
  constructor (props) {
    super(props);
    methods.forEach(method => { this[method] = this[method].bind(this); });
    this.state = this.createInitialState();
  }

  createInitialState () {
    const { height, width } = getViewportDimensions();
    const proportionateHeight = 0.7;
    const proportionateWidth = 0.98;
    return {
      chartDimensions: {
        height: height * proportionateHeight,
        proportionateHeight,
        proportionateWidth,
        width: width * proportionateWidth
      },
      topPane: createRef(),
      model: createExampleModel()
    };
  }

  componentDidMount () {
    const { resizeComplete } = this;
    window.addEventListener('resize', resizeComplete);
  }

  componentWillUnmount () {
    const { resizeComplete } = this;
    window.removeEventListener('resize', resizeComplete);
  }

  resizeComplete () {
    const { state } = this;
    const { chartDimensions } = state;
    const { proportionateHeight, proportionateWidth } = chartDimensions;
    const { height, width } = getViewportDimensions();
    const newChartDimensions = {
      ...chartDimensions,
      height: height * proportionateHeight,
      width: width * proportionateWidth
    };
    this.setState((state) => ({
      ...state,
      chartDimensions: newChartDimensions
    }));
  }

  resplitComplete () {
    const { state } = this;
    const { chartDimensions, topPane } = state;
    const { proportionateWidth } = chartDimensions;
    const { current } = topPane;
    const { height } = getViewportDimensions();
    const newChartDimensions = {
      ...chartDimensions,
      height: current.clientHeight,
      proportionateHeight: current.clientHeight / height,
      width: current.clientWidth * proportionateWidth
    };
    this.setState((state) => ({
      ...state,
      chartDimensions: newChartDimensions
    }));
  }

  render () {
    const { resplitComplete, state } = this;
    const { chartDimensions, model, topPane } = state;
    const { height } = chartDimensions;
    const splitPaneProps = {
      size: height,
      onDragFinished: resplitComplete,
      split: 'horizontal'
    };
    const topPaneProps = {
      ref: topPane
    };
    const chartProps = {
      dimensions: chartDimensions,
      model
    };
    return (
      <SplitPane {...splitPaneProps}>
        <div {...topPaneProps}>
          <Chart {...chartProps} />
        </div>
        <Tabs>
          <TabList>
            <Tab>Setup</Tab>
            <Tab>Grid</Tab>
            <Tab>Raw</Tab>
          </TabList>
          <TabPanel>
            <ModelSetup model={model} />
          </TabPanel>
          <TabPanel>
            <Grid model={model} />
          </TabPanel>
          <TabPanel>
            <RawModel model={model} />
          </TabPanel>
        </Tabs>
      </SplitPane>
    );
  }
}

export default App;
