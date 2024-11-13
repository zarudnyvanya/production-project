import { StateSchema } from 'app/providers/StoreProvider'

export const getCommentFormText = (state: StateSchema) => state.addCommentForm?.text
export const getCommentFormIsLoading = (state: StateSchema) => state.addCommentForm?.isLoading
export const getCommentFormError = (state: StateSchema) => state.addCommentForm?.error
