export enum FirstLevelCategory {
  Courses = 0,
  Services = 1,
  // Books,
  // Products,
  Kids = 4
};

export interface TopPageModel {
  _id: string
  tags: string[]
  secondCategory: string
  alias: string
  title: string
  category: string
  seoText?: string
  tagsTitle: string
  metaTitle: string
  metaDescription: string
  firstCategory: FirstLevelCategory
  advantages?: TopPageAdvantage[]
  createdAt: Date
  updatedAt: Date
  __v: number
  hh?: HhData
  // qas: any[]
  // addresses: any[]
  categoryOn: string
  blog: BlogModel
  sravnikus: SravnikusModel
  learningclub: LearningclubModel
};

export interface TopPageAdvantage {
  title: string
  description: string
  _id: string
};

export interface HhData {
  count: number
  juniorSalary: number
  middleSalary: number
  seniorSalary: number
  updatedAt: Date
  _id: string
};

export interface BlogModel {
  h1: string
  metaTitle: string
  metaDescription: string
  views: number
  _id: string
};

export interface SravnikusModel {
  metaTitle: string
  metaDescription: string
  // qas: any[]
  _id: string
};

export interface LearningclubModel {
  metaTitle: string
  metaDescription: string
  // qas: any[]
  _id: string
};