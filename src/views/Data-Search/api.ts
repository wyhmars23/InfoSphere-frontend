import axiosInstance from "@/config/axios"

export interface Search {
  keywords: string | null;             // 搜索关键词，支持标题和摘要
  publication_number: string | null;   // 公开（公告）号，精确匹配
  inventors: string[] | null;          // 发明人列表，支持多选
  countries: string[] | null;          // 申请国家，支持多选
  publication_year: string | null;     // 公开年份范围
  application_year: string | null;     // 申请年份范围
  page: number;                        // 页码
  size: number;                        // 每页条数
  [key: string]: string | number | string[] | null; // ✅ 允许动态访问
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
  countries: Array<{ country: string; count: number }> | null;
  application_years: Record<number, number> | null;
  publication_years: Record<number, number> | null;
  top_applicants: Array<{ name: string; count: number }> | null;
}


export interface pages{
  page:number;
  size:number;
}

export interface SelectContext{
  inventors:Array<string>;
  countries:Array<string>;
  publication_year:string;
  application_year:string;
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
