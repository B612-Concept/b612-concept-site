import React, { useState } from 'react';
import styled from 'styled-components';
import flags, { data, US } from 'emoji-flags';

import { inputMono } from '@src/styles';

const border = '1px solid black';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  width: fit-content;
`;

const CountriesWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  border: ${border};
  border-left: 0;

  width: 80px;

  select {
    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;
    width: 100%;
    height: 100%;
  }
`;

const InputWrapper = styled.input`
  padding: 20px;
  font-family: ${inputMono};
  border: ${border};
  border-radius: 10px 0 0 10px;
  width: 300px;
`;

const ButtonWrapper = styled.button`
  padding: 20px;
  font-family: ${inputMono};
  border: ${border};
  border-radius: 0 10px 10px 0;

  background-color: black;
  color: white;
`;

const NewsletterForm = ({ className }) => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState(US);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormWrapper className={className} onSubmit={onSubmit}>
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
      <ButtonWrapper type="submit">Subscribe</ButtonWrapper>
    </FormWrapper>
  );
};

export default NewsletterForm;
