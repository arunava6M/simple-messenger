import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: 'users',
  initialState: {
    self: {
      name: 'Arunava',
      id: 'u1'
    },
    friendList: [
      {
        name: 'Ronny',
        id: 'u2'
      },
      {
        name: 'Arjun',
        id: 'u3'
      },
      {
        name: 'Rahul',
        id: 'u4'
      },
      {
        name: 'Subho',
        id: 'u5'
      },
    ],
    selctedUser: 'u2'
  },
  reducers: {
    select: (state,action) => {
      state.selctedUser = action.payload
    }
  }
})

export default UserSlice.reducer
export const {select} = UserSlice.actions;