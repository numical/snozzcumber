import React from 'react';
import {
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
  LineMarkSeries
} from 'react-vis';
import { calculateDate } from '../model/datetime.js';
import '../../node_modules/react-vis/dist/style.css';

const Chart = (props) => {
  const { dimensions, model } = props;
  const { height, width } = dimensions;
  const { dates, values } = model;
  const { epoch, intervalType } = dates;

  const calcDate = calculateDate.bind(null, epoch, intervalType);

  const xyPlotProps = {
    height,
    width
  };

  const yDomain = [0, Math.max.apply(null, values[0]) * 1.2];
  const yAxisProps = {
    tickFormat: (value) => `£${value / 1000}k`,
    yDomain
  };
  const xAxisProps = {
    xType: 'time'
  };
  const seriesProps = {
    data: values[0].map((value, index) => ({x: calcDate(index), y: value})),
    xType: 'time',
    yDomain
  };

  return (
    <XYPlot {...xyPlotProps}>
      <XAxis {...xAxisProps} />
      <YAxis {...yAxisProps} />
      <HorizontalGridLines />
      <VerticalGridLines />
      <LineMarkSeries {...seriesProps} />
    </XYPlot>
  );
};

export default Chart;
