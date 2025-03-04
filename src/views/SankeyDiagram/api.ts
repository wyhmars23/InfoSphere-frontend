import axiosInstance from "@/config/axios"


export const postPicture = (id:string|string[]): Promise<string>=> {
  return axiosInstance.requestMethod('get', `/sankey/${id}`, {"name":id})
};
