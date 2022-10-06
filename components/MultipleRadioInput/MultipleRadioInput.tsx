import styled from 'styled-components';
import type { NextPage } from 'next';
import React from 'react';

type Props = {};

const MultipleRadioInput = (props: Props) => {
  const [catPerson, setCatPerson] = React.useState(false);
  const [dogPerson, setDogPerson] = React.useState(false);

  const handleCatChange = () => {
    setCatPerson(!catPerson);
  };

  const handleDogChange = () => {
    setDogPerson(!dogPerson);
  };

  return (
    <div>
      <Label>
        <RadioButton
          type="radio"
          checked={catPerson}
          onClick={handleCatChange}
        />
        CatPerson
      </Label>
      <Label>
        <RadioButton
          type="radio"
          checked={dogPerson}
          onClick={handleDogChange}
        />
        DogPerson
      </Label>
    </div>
  );
};

const RadioButton = styled.input``;

const Label = styled.label`
  display: block;
`;

export default MultipleRadioInput;
