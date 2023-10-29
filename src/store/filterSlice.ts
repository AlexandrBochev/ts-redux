import { createSlice } from "@reduxjs/toolkit"
import { RootStateType } from "../models/models"

const selectAllUsers = (state: {users: RootStateType}) => state.users.users
console.log(selectAllUsers)

const filterSlice = createSlice({
  name: "filters",
  initialState: {},
  reducers: {
    changeFilter: (_, action) => action.payload
  },
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer