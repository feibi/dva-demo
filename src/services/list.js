import request from '../utils/request';
import {PAGE_SIZE} from '../constants';

export function fetch(params) {
  return request(`/api/v1/bdc/cuijiao/list`, {
    method: 'POST',
    body: JSON.stringify({
      page:1,
      pageSize: PAGE_SIZE,
      ...params
    })
  });
}
