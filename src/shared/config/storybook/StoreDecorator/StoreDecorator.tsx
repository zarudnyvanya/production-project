import { Decorator } from '@storybook/react/*'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entities/Profile'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList): Decorator =>
  (Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    )
  }
