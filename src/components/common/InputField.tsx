import React, { useState } from 'react';
import { Controller, Control } from 'react-hook-form';
import styled from 'styled-components';
import { IconSvg } from './IconSvg';

const InputBox = styled.div`
  height: 80px;
`;

const Input = styled.input<{ error: boolean }>`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  padding: 16px 18px 16px 18px;
  width: 100%;
  height: 56px;
  transition: all ${({ theme }) => theme.animation.cubicBezier};
  outline: none;
  &:hover {
    border: 1px solid var(--green);
  }
  &:focus {
    border: ${props =>
      props.error ? '1px solid #d80027' : '1px solid #3cbf61'};
  }
`;

const InfoInputErr = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 4px;
  margin-top: 4px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #d80027;
`;

const InfoInput = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 4px;
  margin-top: 4px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #3cbf61;
`;

interface InputFieldProps {
  name: 'name' | 'password' | 'email';
  control: Control<any>;
  tooltipText: string;
  type?: string;
  placeholder?: string;
  errors?: any;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  tooltipText,
  type = 'text',
  placeholder = '',
  errors,
}) => {
  const regexPatterns = {
    name: /[а-яА-Яa-zA-Z]{3,}/,
    // password: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
    password: /^(?=(?:.*[а-яА-Яa-zA-Z]){6,})(?=.*\d).+$/,
    email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  };

  const currentRegex = regexPatterns[name] || /.*/;

  const [isFocused, setIsFocused] = useState(false);

  const [data, setData] = useState('');
  const [error, setError] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const setErrorHandle = (data: string) => {
    setData(data);
    if (data && !currentRegex.test(data)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <InputBox>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            type={type}
            onFocus={handleFocus}
            onBlur={() => {
              field.onBlur();
              handleBlur();
            }}
            onChange={e => {
              field.onChange(e);
              setErrorHandle(e.target.value);
            }}
            error={error}
          />
        )}
      />
      {isFocused && !error && !data && <InfoInput>{tooltipText}</InfoInput>}
      {isFocused && !error && data && (
        <InfoInput>
          <IconSvg icon="okey" size="15px" />
          <span>Success {name}</span>
        </InfoInput>
      )}
      {isFocused && error && (
        <InfoInputErr>
          <IconSvg icon="error" size="15px" />
          <span>Error {name}</span>
        </InfoInputErr>
      )}
    </InputBox>
  );
};
