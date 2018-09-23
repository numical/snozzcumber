import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { createExampleModel } from '../model/factory.js';
import RawModel from './RawModel.js';
import TableModel from './TableModel.js';

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
    return (
      <div>
        <div>
          Snozzcumber
        </div>
        <Tabs>
          <TabList>
            <Tab>Grid</Tab>
            <Tab>Raw</Tab>
          </TabList>
          <TabPanel>
            <TableModel model={model} />
          </TabPanel>
          <TabPanel>
            <RawModel model={model} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
