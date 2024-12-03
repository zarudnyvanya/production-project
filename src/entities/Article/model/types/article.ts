import { User } from 'entities/User'

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ArtcileBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
  id: string
  type: ArtcileBlockType
}

export interface ArticleCodeBlockType extends ArticleBlockBase {
  type: ArtcileBlockType.CODE
  code: string
}
export interface ArticleImageBlockType extends ArticleBlockBase {
  type: ArtcileBlockType.IMAGE
  title: string
  src: string
}
export interface ArticleTextBlockType extends ArticleBlockBase {
  type: ArtcileBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlockType | ArticleImageBlockType | ArticleTextBlockType

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export interface Article {
  id: string
  user: User
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
