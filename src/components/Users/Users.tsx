import { useSelector } from "react-redux"
import { User } from "../User/User"
import { Filter } from "../Filter/Filter"
import { selectFilteredUsers } from "../../store/selectors"
import { UserType } from "../../models/models"

const Users = () => {
  const users = useSelector(selectFilteredUsers) as unknown as UserType[]
  
  return (
    <>
      <form>
        <Filter title="Gender" name="gender" />
        <Filter title="Eye Color" name="eyeColor" />
        <Filter title="Age" name="age" />
      </form>
      <ul>
        {users && users.map((user: UserType) => <User user={ user } key={ user.id } />)}
      </ul>
    </>
  )
}

export { Users }