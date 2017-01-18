import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseErrorMessage({ data }) {

  if(data.needLogin){
    throw new Error('全局错误,未登录');
  }else{
    const { resultCode, message } = data;
    if (!resultCode||!data.code) {
      throw new Error(message);
    }
  }
  return { data };
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
 export default async function request(url, options) {
   options.headers={
     Accept: 'application/json',
     'Content-Type': 'application/json',
     "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",
   }
   options.credentials= 'include'
   const response = await fetch(url, options);

   checkStatus(response);
   const data = await response.json();

   if(Number(data.code)||Number(data.resultCode)||data.needLogin){
     parseErrorMessage({data})
   }
   const ret = {
     data,
     headers: {},
   };


   if (response.headers.get('x-total-count')) {
        // console.warn(response.headers.get('x-powered-by'))
     ret.headers['x-total-count'] = response.headers.get('x-total-count');
   }

   return ret;
 }
