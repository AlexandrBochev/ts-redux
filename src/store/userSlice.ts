import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL, UserType } from "../models/models"

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch(BASE_URL)
      if (!response.ok) {
        throw new Error("Server Error.")
      }
      const data = await response.json()
      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      if (window.confirm('Are you sure you want to delete this user?')) {
        const response = await fetch(`${BASE_URL}/${id}`, {
          method: 'DELETE'
        })
        if (!response.ok) {
          throw new Error("Cant delete user. Server Error.")
        }
        dispatch(removeUser(id))
      }
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const isLiked = createAsyncThunk(
  'users/isLiked',
  async (id: number, { rejectWithValue, dispatch, getState }) => {
    const user = (getState() as any).users.users.find((user: UserType) => user.id === id)
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ liked: !user.liked })
      })
      if (!response.ok) {
        throw new Error("Cant liked user. Server Error.")
      }
      dispatch(likeUser(id))
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const setError = (state: any, action: any) => {
  state.status = "rejected"
  state.error = action.payload
}

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [] as UserType[],
    status: "idle",
    error: null,
  },

  reducers: {
    removeUser: (state, action) => {
      state.users = state.users.filter((user: UserType) => user.id !== action.payload)
    },

    likeUser: (state, action) => {
      const user = state.users.find((user: UserType) => user.id === action.payload)
      if (user) {
        user.liked = !user.liked
      }
    },
  },

  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.status = "loading"
      state.error = null
    },

    [fetchUsers.fulfilled.type]: (state, action) => {
      state.status = "resolved"
      state.users = action.payload
    },

    [fetchUsers.rejected.type]: setError,
    [deleteUser.rejected.type]: setError,
    [isLiked.rejected.type]: setError,
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchUsers.pending, (state) => {
  //       state.status = "loading"
  //       state.error = null
  //     })
  //     .addCase(fetchUsers.fulfilled, (state, action) => {
  //       state.status = "resolved"
  //       state.users = action.payload
  //     })
  //     .addCase(fetchUsers.rejected, (state, action) => {
  //       state.status = "error"
  //       state.error = action.error.message
  //     })
  // },
})

export const { removeUser, likeUser } = userSlice.actions
export default userSlice.reducer