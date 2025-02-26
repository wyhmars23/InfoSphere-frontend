import axiosInstance from "@/config/axios"

export interface Search {
  keywords: string|null;                    // 搜索关键词，支持标题和摘要
  publication_number: string|null;          // 公开（公告）号，精确匹配
  inventors: string|null;                 // 发明人列表，支持多选
  ipc_class: string|null;                 // IPC分类号，支持多选
  abstract: string|null;                    // 摘要内容
  publication_year: string|null;            // 公开年份范围
  application_year: string|null;            // 申请年份范围
  page: number;                        // 页码
  size: number;                        // 每页条数
  [key: string]: string | number | null; // 添加索引签名，允许动态键
}

export interface Item{
  id: string | null;
  title: string | null;
  applicant: string | null;
  pub_number: string | null;
  pub_date: string | null;
  ipc: string | null;
  status: string | null;
  value: number | null;
  highlight: {
    title: string | null;
    abstract: string | null;
    tech_effect: string | null;
  } | null;
}

export interface Aggregations {
  ipc_distribution: Array<string>|null;
  legal_status: object|null;
  publication_years: object|null;
  top_applicants: Array<string>|null;
}


interface SearchResponse{
  aggregations:Aggregations;
  items:Array<Item>;
  total:number;
}


// 搜索接口
export const postSearch = (data: Search)=> {
  return axiosInstance.requestMethod<SearchResponse>('post', '/search', data)
};
