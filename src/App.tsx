import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Users } from "./components/Users/Users"
import { fetchUsers } from "./store/userSlice"
import { RootStateType } from "./models/models"

const App = () => {
  const {status, error} = useSelector((state: RootStateType) => state.users)
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
    {status === 'loading' && <h4>Loading...</h4>}
    {error ? <h4>{error}</h4> : <Users />}
    </>
  )
}

export { App }
