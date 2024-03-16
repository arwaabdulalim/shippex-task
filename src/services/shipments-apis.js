import { apiService } from './api';

export const getShipmentsList = async () => {
  const data = await apiService.get('method/frappe.client.get_list', {
    doctype: 'AWB',
    fields: ['*'],
  });
  return data;
};
