import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/common/InputField';
import { Text } from 'components/common/Text';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button } from 'components/common/Button';
import { Box, FormBox, IconBox, InfoInput, InputBox } from './LoginForm.styled';
import { IconSvg } from 'components/common/IconSvg';
import { DICTIONARY_ROUTE, REGISTER_ROUTE } from 'utils/const';
import { useDispatch } from 'react-redux';
import { signInThunk } from 'store/auth/authThunk';
import { AppDispatch } from 'store/store';
import {
  errorSelector,
  isAuthSelector,
  loadingSelector,
  profileSelector,
} from 'store/auth/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { LoaderPercent } from 'components/Loader/LoaderPercent';

interface FormValues {
  email: string;
  password: string;
}

const schema = yup.object().shape({
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

const LoginForm: React.FC = () => {
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
    setValue('email', data.email);
    setValue('password', data.password);
    const resultAction = await dispatch(signInThunk(data));

    if (signInThunk.rejected.match(resultAction)) {
      toast.error(`${resultAction.payload}`);
    } else {
      navigate(DICTIONARY_ROUTE);
    }
  };
  return (
    <FormBox>
      <Text>Login</Text>
      <Text p="true">
        Please enter your login details to continue using
        <br /> our service:
      </Text>
      <Box>
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
      </Box>
      <Link to={REGISTER_ROUTE}>
        <Button link="true" margin="16px 0px 0px 0px">
          Register
        </Button>
      </Link>
    </FormBox>
  );
};

export default LoginForm;
