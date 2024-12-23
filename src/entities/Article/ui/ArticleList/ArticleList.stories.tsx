import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList } from './ArticleList'
import { Article, ArticleView } from 'entities/Article/model/types/article'

const meta: Meta<typeof ArticleList> = {
  title: 'entities/ArticleList',
  component: ArticleList,
}

export default meta
type Story = StoryObj<typeof ArticleList>

const article = {
  id: '1',
  user: {
    id: '1',
    username: 'Pupkin',
    avatar: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg',
  },
  title: 'Javascript news',
  subtitle: "What's new in js in 2024",
  img: 'https://i.pinimg.com/originals/ba/bd/6d/babd6d37eb2dd965c7f1dfb516d54094.jpg',
  views: 789,
  createdAt: '26.02.2024',
  type: ['IT', 'POLITIC', 'SCIENCE'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Zagolovok blocka',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quod?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non itaque velit vitae explicabo quidem autem nulla repellat quibusdam fugit?',
        'non itaque velit vitae explicabo quidem',
      ],
    },
    {
      id: '4',
      type: 'CODE',
      code: "const server = jsonServer.create()\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'))\n\nserver.use(jsonServer.defaults({}))",
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Zagolovok Etogo blocka',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quod?',
        'non itaque velit vitae explicabo quidem',
      ],
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbuiltin.com%2Fsites%2Fwww.builtin.com%2Ffiles%2Fstyles%2Fckeditor_optimize%2Fpublic%2Finline-images%2F2_react-js-image.jpg&f=1&nofb=1&ipt=cc11a359d1a23715c9e9ba49ba3e144f5e650ff3e4cedd5e42369681d80f23c5&ipo=images',
      title: 'Picture 1 - js code',
    },
    {
      id: '3',
      type: 'CODE',
      code: 'export const AppLink = memo((props: AppLinkProps) => {\n  const { to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps } = props\n\n  return (\n    <Link \n  to={to}\n  className={classNames(styles.appLink, {}, [className, styles[theme]])}\n  {...otherProps}\n >\n     {children}\n </Link>\n)\n })',
    },
  ],
} as Article

export const ArticleSmall: Story = {
  args: {
    articles: [article],
  },
}

export const ArticleBig: Story = {
  args: {
    articles: [article],
    view: ArticleView.BIG,
  },
}

export const ArticleSmallLoading: Story = {
  args: {
    isLoading: true,
  },
}

export const ArticleBigLoading: Story = {
  args: {
    isLoading: true,
    view: ArticleView.BIG,
  },
}
