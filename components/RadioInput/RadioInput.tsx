import styled from 'styled-components';
import React from 'react';

type Props = {};

const RadioInput = (props: Props) => {
  const [value, setValue] = React.useState(false);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <label>
      <input type="radio" checked={value} onClick={handleChange} />
      Cat
    </label>
  );
};

export default RadioInput;
