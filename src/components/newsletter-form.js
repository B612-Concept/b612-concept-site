import React, { useState } from 'react';
import styled from 'styled-components';
import flags, { data, US } from 'emoji-flags';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import { inputMono } from '@src/styles';
import { max } from '@src/responsive';

const border = '1px solid black';
const defaultColor = '#a9a9a9';
const red = 'red';
const green = 'green';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media all and ${max.tablet} {
    flex-direction: column;
  }
`;

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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

  ::placeholder {
    color: ${(props) => props.msgColor};
  }

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
  const [msgColor, setMsgColor] = useState(defaultColor);
  const [inputPlaceHolder, setInputPlaceHolder] = useState('Email address');

  const resetInputField = () => {
    setMsgColor(defaultColor);
    setInputPlaceHolder('Email address');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const listField = { COUNTRY: country.name };

    addToMailchimp(email, listField).then((res) => {
      setEmail('');
      if (res.result === 'success') {
        setMsgColor(green);
        setInputPlaceHolder('Thanks for subscribing');
      } else if (res.msg.includes('already subscribed')) {
        setMsgColor(green);
        setInputPlaceHolder('Email is already subscribed');
      } else {
        setMsgColor(red);
        setInputPlaceHolder('Invalid email');
      }
      setTimeout(() => resetInputField(), 2000);
    });
  };

  return (
    <FormWrapper className={className} onSubmit={onSubmit}>
      <FieldsWrapper>
        <InputWrapper
          msgColor={msgColor}
          name="email"
          placeholder={inputPlaceHolder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CountriesWrapper>
          <div>{country.emoji}</div>
          <select
            defaultValue={country.name}
            name="country"
            onChange={(e) => {
              setCountry(flags[e.target.value]);
            }}
          >
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
