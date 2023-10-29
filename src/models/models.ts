// Types
export interface UserType {
  name: any
  id: number
  firstName: string
  lastName: string
  gender: string
  eyeColor: string
  age: number
  liked: boolean
  [key: string]: any;
}

export interface RootStateType {
  name: string
  option: string
  users: {
    filter(arg0: (user: any) => boolean): any
    status: string
    error: string
    users: UserType[]
  }
}

export interface FilterPropsType {
  title: string
  name: string
}

// Constants
export const filterOptions = {
  gender: ["female", "male", "All"],
  eyeColor: ["Green", "Brown", "Gray", "Blue", "Amber", "All"],
  age: ["Less then 20", "From 20 to 40", "More than 40", "All"],
}

export const BASE_URL = "http://localhost:3004/users"