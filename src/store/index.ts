import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./userSlice"
import filterReducer from "./filterSlice"

export default configureStore({
  reducer: {
    users: usersReducer,
    filters: filterReducer,
  },
})