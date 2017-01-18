import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page = 1 }) {
  return request(`/api/v1/bdc/cuijiao/list`,{
    method:'POST',
    body: JSON.stringify({page,pageSize:PAGE_SIZE}),
  }
  );
}
