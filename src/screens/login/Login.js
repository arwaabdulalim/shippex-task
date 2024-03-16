import React from 'react';
import { Text, View, ActivityIndicator, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';
import InputField from '../../components/inputField/inputField';
import MainButton from '../../components/mainButton/MainButton';
import styles from './styles';
import NavBack from '../../components/navBack/NavBack';
import { useLogin } from '../../hooks/useLogin';
import { useUserStore } from '../../config/zustand/userStore';

const schema = yup.object({
  // email: yup.string().email('Invalid email').required('Email is required'),
  // password: yup.string().required('Password is required'),
  // url: yup.string().url('Invalid URL').required('URL is required'),
  email: yup.string(),
  password: yup.string(),
  url: yup.string(),
});

const Login = ({ navigation }) => {
  const { setIsSignedIn } = useUserStore();
  const { loginUser, isLoading } = useLogin({
    onSuccessHandler: () => {
      setIsSignedIn(true);
    },
    onErrorHandler: () => {
      Alert.alert('Invalid Info');
    },
  });
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    revalidation: 'onChange',
  });
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    register,
  } = methods;

  const email = watch('email');
  const password = watch('password');
  const url = watch('url');
  const isButtonEnabled = email && password && url;

  const onSubmit = handleSubmit(data => {
    console.log('hello', {
      userName: email,
      password: password,
    });
    loginUser({
      userName: email,
      password: password,
    });
  });

  return (
    <View style={styles.container}>
      <View>
        <NavBack />
        <Text style={styles.title}>Login</Text>
        <Text style={styles.desc}>
          Please enter your First, Last name and your phone number in order to
          register
        </Text>
        <Controller
          control={control}
          name="url"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              placeholder="URL"
              value={value}
              setvalue={(val: any) => {
                onChange(val);
              }}
              onBlur={onBlur}
              errorMessage={errors.url?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              placeholder="Username / Email "
              value={value}
              setvalue={(val: any) => {
                onChange(val);
              }}
              onBlur={onBlur}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              placeholder="Password"
              secureTextEntry
              value={value}
              setvalue={onChange}
              onBlur={onBlur}
              errorMessage={errors.password?.message}
            />
          )}
        />
      </View>
      <View style={styles.btnWrapper}>
        <MainButton
          title="Login"
          navigation={navigation}
          onPress={handleSubmit(onSubmit)}
          disabled={!isButtonEnabled}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
};

export default Login;
