// 型定義ファイル
// プロジェクト全体で使用される型を定義

export interface CompanyInfo {
  name: string;
  description: string;
  address: string;
  tel: string;
  email: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  author: string;
}

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  salary: string;
}