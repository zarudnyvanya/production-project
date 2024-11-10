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

export enum ArtcileType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArtcileType[]
  blocks: ArticleBlock[]
}
