/**
 * 根据环境变量配置接口域名
 */
export const isProd = process.env.NODE_ENV === 'production';
export const ENV = process.env.NODE_ENV;
interface ApiHostType {
  pan: string;
}

let apiHost: ApiHostType = { pan: '' };

if (ENV === 'production') {
  apiHost = {
    pan: 'https://xluser-ssl.xunlei.com',
  };
}
if (ENV === 'development') {
  apiHost = {
    pan: 'https://xluser-ssl.xunlei.com',
  };
}
export const API_HOST = apiHost;