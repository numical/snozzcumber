import React from 'react';
import { Form, Text } from 'informed';

const ModelSetup = (props) => {
  // const { model } = props;
  return (
    <Form id='form'>
      <label htmlFor='startDate'>Start Date</label>
      <Text field='epoch' id='startDate' />
      <button type='submit'>Submit</button>
    </Form>
  );
};

export default ModelSetup;
