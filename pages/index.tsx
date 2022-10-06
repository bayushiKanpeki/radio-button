import styled from 'styled-components';
import type { NextPage } from 'next';
import React from 'react';
import RadioInput from '../components/RadioInput';
import Spacer from '../components/Spacer';
import MultipleRadioInput from '../components/MultipleRadioInput';
import SingleCheckRadioInput from '../components/SingleCheckRadioInput';

const Home: NextPage = () => {
  const [value, setValue] = React.useState(false);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <>
      <Spacer size={32} />
      <Caption>Single Radio Input</Caption>
      <RadioInput />
      <Caption>Multiple Radio Input</Caption>
      <MultipleRadioInput />
      <Caption>Only one Radio Input can be checked</Caption>
      <SingleCheckRadioInput />
    </>
  );
};

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Caption = styled.h1`
  margin-top: 32px;
`;

export default Home;
