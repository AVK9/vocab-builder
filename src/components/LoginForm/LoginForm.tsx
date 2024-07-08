import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
import { isAuthSelector } from 'store/auth/selectors';
import { useSelector } from 'react-redux';

interface FormValues {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).max(16).required(),
});

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(isAuthSelector);

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

  const onSubmit = async (data: { email: string; password: string }) => {
    await dispatch(signInThunk(data));
  };

  useEffect(() => {
    if (token) {
      navigate(DICTIONARY_ROUTE);
    }
  }, [token, navigate]);

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
