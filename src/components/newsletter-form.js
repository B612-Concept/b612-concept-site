import React, { useState } from 'react';
import styled from 'styled-components';
import flags, { data, US } from 'emoji-flags';

import { inputMono } from '@src/styles';
import { max } from '@src/responsive';

const border = '1px solid black';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  width: fit-content;

  @media all and ${max.tablet} {
    flex-direction: column;
  }
`;

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CountriesWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  border: ${border};
  border-left: 0;

  width: 100px;

  select {
    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;
    width: 100%;
    height: 100%;
  }

  @media all and ${max.tablet} {
    border-radius: 0 10px 10px 0;
  }
`;

const InputWrapper = styled.input`
  padding: 20px;
  font-family: ${inputMono};
  border: ${border};
  border-radius: 10px 0 0 10px;

  width: 100%;
`;

const ButtonWrapper = styled.button`
  padding: 20px;
  font-family: ${inputMono};
  border: ${border};
  border-radius: 0 10px 10px 0;

  background-color: black;
  color: white;

  @media all and ${max.tablet} {
    border-radius: 10px;
    margin-top: 10px;
  }
`;

const NewsletterForm = ({ className }) => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState(US);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormWrapper className={className} onSubmit={onSubmit}>
      <FieldsWrapper>
        <InputWrapper
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CountriesWrapper>
          <div>{country.emoji}</div>
          <select onChange={(e) => setCountry(flags[e.target.value])}>
            {data.map(({ emoji, name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </CountriesWrapper>
      </FieldsWrapper>
      <ButtonWrapper type="submit">Subscribe</ButtonWrapper>
    </FormWrapper>
  );
};

export default NewsletterForm;
