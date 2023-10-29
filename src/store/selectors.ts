import { createSelector } from "@reduxjs/toolkit";
import { RootStateType } from "../models/models";

export const selectAllUsers = (state: {users: RootStateType}) => state.users.users
export const selectActiveFilters = (state: {filters: RootStateType}) => state.filters

export const selectFilteredUsers = createSelector(
  [selectAllUsers, selectActiveFilters],
  (allUsers, activeFilter) => {
    if (!activeFilter.option || activeFilter.option === "All") {
      return allUsers
    }

    return allUsers.filter((user) => {
      if (activeFilter.name === "age") {
        if (activeFilter.option === "Less then 20") {
          return user.age < 20
        } else if (activeFilter.option === "From 20 to 40") {
          return user.age >= 20 && user.age <= 40
        } else if (activeFilter.option === "More than 40") {
          return user.age > 40
        }
      } else {
        return user[activeFilter.name] === activeFilter.option
      }
      return false
    })
  }
)

