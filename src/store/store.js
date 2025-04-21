import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './features/Chat/slice'
import usersReducer from './features/User/slice'

const store = configureStore({
  reducer: {
    chat: chatReducer,
    users: usersReducer
  },
})

export default store