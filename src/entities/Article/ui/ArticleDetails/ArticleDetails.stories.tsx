import type { Meta, StoryObj } from '@storybook/react'

import { ArticleDetails } from './ArticleDetails'
import { ArtcileBlockType, ArticleType, Article } from 'entities/Article/model/types/article'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
}

export default meta
type Story = StoryObj<typeof ArticleDetails>

const article: Article = {
  id: '1',
  user: {
    id: '1',
    username: 'Pupkin',
    avatar: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg',
  },
  title: 'Javascript news',
  subtitle: "What's new in js in 2024",
  img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.316760221.5828%2Fflat%2C800x800%2C075%2Cf.jpg&f=1&nofb=1&ipt=a5d61c10adcb28ab54bf5a9e06d22e20965d1f61560f3eb9d3899968a71a772d&ipo=images',
  views: 789,
  createdAt: '26.02.2024',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArtcileBlockType.TEXT,
      title: 'Zagolovok blocka',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quod?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non itaque velit vitae explicabo quidem autem nulla repellat quibusdam fugit?',
        'non itaque velit vitae explicabo quidem',
      ],
    },
    {
      id: '4',
      type: ArtcileBlockType.CODE,
      code: "const server = jsonServer.create()\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'))\n\nserver.use(jsonServer.defaults({}))",
    },
    {
      id: '5',
      type: ArtcileBlockType.TEXT,
      title: 'Zagolovok Etogo blocka',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quod?',
        'non itaque velit vitae explicabo quidem',
      ],
    },
    {
      id: '2',
      type: ArtcileBlockType.IMAGE,
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbuiltin.com%2Fsites%2Fwww.builtin.com%2Ffiles%2Fstyles%2Fckeditor_optimize%2Fpublic%2Finline-images%2F2_react-js-image.jpg&f=1&nofb=1&ipt=cc11a359d1a23715c9e9ba49ba3e144f5e650ff3e4cedd5e42369681d80f23c5&ipo=images',
      title: 'Picture 1 - js code',
    },
    {
      id: '3',
      type: ArtcileBlockType.CODE,
      code: 'export const AppLink = memo((props: AppLinkProps) => {\n  const { to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps } = props\n\n  return (\n    <Link \n  to={to}\n  className={classNames(styles.appLink, {}, [className, styles[theme]])}\n  {...otherProps}\n >\n     {children}\n </Link>\n)\n })',
    },
  ],
}

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
}

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
}

export const Error: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        error: 'Error',
      },
    }),
  ],
}
