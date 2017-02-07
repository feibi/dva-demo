import request from '../utils/request';


export function fetchStore() {
  return request(`/api/?_url=/erp/filter/store&act=list&uid`,{
    method:'GET',
    // body: JSON.stringify({_url:'/erp/filter/store',act:'list'}),
  }
  );
}

export function fetchStatus() {
  return request(`/api/v1/ts/manage/dic/searchStatus`,{
    method:'GET',
    // body: JSON.stringify({_url:'/erp/filter/store',act:'list'}),
  }
  );
}

export function fetchCheckoutType() {
  return request(`/api/v1/ts/manage/dic/checkoutType`,{
    method:'GET',
    // body: JSON.stringify({_url:'/erp/filter/store',act:'list'}),
  }
  );
}
