import axios from 'axios';

export const baseURL = process.env.NODE_ENV === "development"
  ? 'api/'
  : process.env.VUE_APP_API_URL;

let request = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('TOKEN')}`
  }
});

//test
export const test = () => {
  return request.get('');
}

//获取书目列表
export const getBookList = () => {
  return request.get('/book/list');
}

//用户登录
export const adminLogin = (email, password) => {
  return request.post('/auth/admin',{
    email,
    password
  });
}