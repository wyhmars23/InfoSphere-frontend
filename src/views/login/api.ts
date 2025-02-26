import axiosInstance from "@/config/axios"

interface Login{
  username:string
  password:string
}

interface Register{
  username:string
  password:string
}

interface LoginResponse {
  token: string;
}

interface RegisterResponse {
  message: string;
}

// 登录
export const postLogin = (data: Login) => {
  return axiosInstance.requestMethod<LoginResponse>('post', '/login', data)
};


// 注册
export const postRegister = (data: Register)=> {
  return axiosInstance.requestMethod<RegisterResponse>('post', '/register', data)
};
