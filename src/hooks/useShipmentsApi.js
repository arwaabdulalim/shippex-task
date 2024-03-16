import { useQuery } from 'react-query';
import { getShipmentsList } from '../services/shipments-apis';

export const useGetShipmentsList = ({
  onSuccessHandler,
  onErrorHandler,
  enabled,
}: {
  onSuccessHandler?: data => void,
  onErrorHandler?: error => void,
  enabled: boolean,
}) => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    'shipments-list',
    () => getShipmentsList(),
    {
      onSuccess(data) {
        onSuccessHandler && onSuccessHandler(data);
      },
      onError(error) {
        onErrorHandler && onErrorHandler(error);
      },
      enabled,
      retry: false
    },
  );
  return {
    data: data ?? [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  };
};
