import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Chart from './Chart.js';
import Grid from './Grid.js';
import RawModel from './RawModel.js';
import { getViewportDimensions } from './DOM.js';
import { createExampleModel } from '../model/factory.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      model: createExampleModel()
    };
  }

  render () {
    const { state } = this;
    const { model } = state;
    const { height } = getViewportDimensions();
    const splitPaneProps = {
      defaultSize: height * 0.7,
      split: 'horizontal'
    };

    return (
      <SplitPane {...splitPaneProps}>
        <Chart model={model} />
        <Tabs>
          <TabList>
            <Tab>Grid</Tab>
            <Tab>Raw</Tab>
          </TabList>
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
