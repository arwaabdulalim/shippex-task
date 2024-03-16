import { useMutation } from 'react-query';
import { postLoginUser } from '../services/auth-apis';

export const useLogin = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: error => void,
  onSuccessHandler: data => void,
}) => {
  const {
    mutate: loginUser,
    isLoading,
    isError,
    error,
    data,
    isSuccess,
  } = useMutation(postLoginUser, {
    onError: error => {
      onErrorHandler(error);
    },
    onSuccess: data => {
      onSuccessHandler(data);
    },
  });

  return { loginUser, isLoading, error, isError, isSuccess, data };
};
