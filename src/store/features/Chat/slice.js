import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: 'chat',
  initialState: {
      u2: [
        {
          id: 'm1',
          sender: 'u1',
          message: 'Hi'
        },
        {
          id: 'm2',
          sender: 'u2',
          message: 'HI'
        },
        {
          id: 'm3',
          sender: 'u1',
          message: 'How are you buddy ?'
        },
        {
          id: 'm4',
          sender: 'u2',
          message: 'Am good. What about you ?'
        },
        {
          id: 'm5',
          sender: 'u2',
          message: 'What are you doing nowadays ?'
        },
      ],
      u3: [
        {
          id: 'm1',
          sender: 'u1',
          message: 'Hey buddy'
        },
        {
          id: 'm2',
          sender: 'u3',
          message: 'Whatsup'
        },
        {
          id: 'm3',
          sender: 'u1',
          message: 'Wanna play fifa ?'
        },
        {
          id: 'm4',
          sender: 'u3',
          message: 'Am all free !'
        },
        {
          id: 'm5',
          sender: 'u1',
          message: 'Great sending you  a request'
        },
      ],
      u5: [
        {
          id: 'm1',
          sender: 'u5',
          message: 'Hey buddy'
        },
        {
          id: 'm2',
          sender: 'u1',
          message: 'Whatsup'
        },
        {
          id: 'm3',
          sender: 'u1',
          message: 'Have you reached'
        },
        {
          id: 'm4',
          sender: 'u5',
          message: 'almost. You ?'
        },
      ]
  },
  reducers: {
    send: (state,{payload: {chatId, sender, message}}) => {
      console.log('inside send')
      if (!state[chatId]) {
        state[chatId] = [];
      }
      state[chatId].push({
        id: `m${state[chatId].length + 1}`,
        sender,
        message
      })
    }
  }
})

export default ChatSlice.reducer
export const {send} = ChatSlice.actions