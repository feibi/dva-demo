import request from '../utils/request';

export function fetch() {
  return request(`/api/?_url=/acl/userMenu&act=nothing`,{
    method:'GET'
  }
  );
}
