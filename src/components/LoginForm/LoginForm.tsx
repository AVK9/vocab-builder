import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/common/InputField';
import { Text } from 'components/common/Text';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button } from 'components/common/Button';
import { FormBox, IconBox, InfoInput, InputBox } from './LoginForm.styled';
import { IconSvg } from 'components/common/IconSvg';
import { REGISTER_ROUTE } from 'utils/const';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().min(3).max(30).required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(16).required(),
});

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState<boolean>(false);

  const isShowPass = () => setShowPass(prev => !prev);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = data => {
    const { email, password, name } = data;
  };

  return (
    <FormBox>
      <Text>Login</Text>
      <Text p="true">
        Please enter your login details to continue using our service:
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <InputField
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            control={control}
            placeholder="Email"
            tooltipText="Please enter your valid email."
          />
          {errors.email && (
            <InfoInput role="alert">{errors.email.message}</InfoInput>
          )}
        </InputBox>
        <InputBox>
          <InputField
            {...register('password')}
            aria-invalid={errors.password ? 'true' : 'false'}
            type={showPass ? 'text' : 'password'}
            control={control}
            placeholder="Password"
            tooltipText="Your password (at least 1 number and 6 letters)"
          />
          <IconBox onClick={isShowPass}>
            <IconSvg
              stroke="var(--black)"
              icon={showPass ? 'eye' : 'eye-off'}
            />
          </IconBox>
          {errors.password && (
            <InfoInput role="alert">{errors.password.message}</InfoInput>
          )}
        </InputBox>
        <Button margin="8px 0px 0px 0px">Login</Button>
      </form>
      <Link to={REGISTER_ROUTE}>
        <Button link="true" margin="16px 0px 0px 0px">
          Register
        </Button>
      </Link>
    </FormBox>
  );
};

export default LoginForm;
