import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/common/InputField';
import { Text } from 'components/common/Text';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button } from 'components/common/Button';
import { FormBox, IconBox, InfoInput, InputBox } from './RegisterForm.styled';
import { IconSvg } from 'components/common/IconSvg';
import { DICTIONARY_ROUTE, LOGIN_ROUTE } from 'utils/const';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'store/auth/authThunk';
import { AppDispatch } from 'store/store';
import { toast } from 'react-toastify';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().min(3).max(30).required(),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'The password must consist of 6 English letters and 1 number.')
    .max(7, 'The password must consist of 6 English letters and 1 number.')
    .required('Password is required'),
});

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [showPass, setShowPass] = useState<boolean>(false);

  const isShowPass = () => setShowPass(prev => !prev);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
    if (event) {
      event.preventDefault();
    }
    setValue('name', data.name);
    setValue('email', data.email);
    setValue('password', data.password);
    const resultAction = await dispatch(signUpThunk(data));
    if (signUpThunk.rejected.match(resultAction)) {
      toast.error(`${resultAction.payload}`);
    } else {
      navigate(DICTIONARY_ROUTE);
    }
  };

  return (
    <FormBox>
      <Text>Register</Text>
      <Text p="true">
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <InputField
            {...register('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
            control={control}
            placeholder="Name"
            tooltipText="Please enter your name (minimum 3 characters)."
          />
          {errors.name?.type === 'required' && (
            <p role="alert">Name is required</p>
          )}
        </InputBox>
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
        <Button margin="8px 0px 0px 0px">Register</Button>
      </form>
      <Link to={LOGIN_ROUTE}>
        <Button link="true" margin="16px 0px 0px 0px">
          Login
        </Button>
      </Link>
    </FormBox>
  );
};

export default RegisterForm;
