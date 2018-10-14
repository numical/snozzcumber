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

  const xyPlotProps = {
    height,
    width
  };

  const xValues = calculateDateValues(model);
  const yValues = rows.map(calculateRowValues.bind(null, model));

  const maxYValue = yValues.reduce((max, rowValues) => {
    const rowMax = Math.max.apply(null, rowValues);
    return (rowMax > max) ? rowMax : max;
  }, 0);

  const yDomain = [0, maxYValue * 1.2];
  const yAxisProps = {
    tickFormat: (value) => `£${value / 1000}k`,
    yDomain
  };
  const xAxisProps = {
    xType: 'time'
  };

  const seriesProps = yValues.map((seriesValues) => ({
    data: seriesValues.map((value, index) => ({x: xValues[index], y: value})),
    xType: 'time',
    yDomain
  }));
  const lines = seriesProps.map((lineProps) => (<LineMarkSeries {...lineProps} />));

  return (
    <XYPlot {...xyPlotProps}>
      <XAxis {...xAxisProps} />
      <YAxis {...yAxisProps} />
      <HorizontalGridLines />
      <VerticalGridLines />
      {lines}
    </XYPlot>
  );
};

export default Chart;
