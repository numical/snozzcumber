import React from 'react';
import {
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
  LineMarkSeries
} from 'react-vis';
import calculateDateValues from '../model/calculateDateValues.js';
import calculateRowValues from '../model/calculateRowValues.js';
import '../../node_modules/react-vis/dist/style.css';

const Chart = (props) => {
  const { dimensions, model } = props;
  const { height, width } = dimensions;
  const { rows } = model;

  const xValues = calculateDateValues(model);
  const yValues = calculateRowValues(model, rows[0]);

  const xyPlotProps = {
    height,
    width
  };

  const yDomain = [0, Math.max.apply(null, yValues) * 1.2];
  const yAxisProps = {
    tickFormat: (value) => `£${value / 1000}k`,
    yDomain
  };
  const xAxisProps = {
    xType: 'time'
  };
  const seriesProps = {
    data: yValues.map((value, index) => ({x: xValues[index], y: value})),
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
