export interface Medium {
  data: MediumRss
}

export interface MediumRss {
  feed: User
  items: Datum[]
}

export interface Datum {
  title: string
  pubDate: Date
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  categories: string[]
}

export interface User {
  url: string
  title: string
  link: string
  author: string
  description: string
  image: string
}
