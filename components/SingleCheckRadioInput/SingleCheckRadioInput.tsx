import React from 'react';
import styled from 'styled-components';

type Props = {};

const SingleCheckRadioInput = (props: Props) => {
  const [SelectedRadioBtn, setSelectedRadioBtn] = React.useState('radio1');

  const isRadioSelected = (value: string): boolean => {
    return SelectedRadioBtn === value;
  };

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRadioBtn(e.currentTarget.value);
  };

  return (
    <div>
      <Label>
        <input
          type="radio"
          name="react-radio-btn"
          value="radio1"
          checked={isRadioSelected('radio1')}
          onChange={handleRadioClick}
        />
        Radio 1
      </Label>
      <Label>
        <input
          type="radio"
          name="react-radio-btn"
          value="radio2"
          checked={isRadioSelected('radio2')}
          onChange={handleRadioClick}
        />
        Radio 2
      </Label>
      <Label>
        <input
          type="radio"
          name="react-radio-btn"
          value="radio3"
          checked={isRadioSelected('radio3')}
          onChange={handleRadioClick}
        />
        Radio 3
      </Label>
    </div>
  );
};

const Label = styled.label`
  display: block;
`;

export default SingleCheckRadioInput;
