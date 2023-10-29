import { useDispatch } from "react-redux"
import { UserType } from "../../models/models"
import { deleteUser, isLiked } from "../../store/userSlice"

// ✓ TODO: use db.json file to store data, use json-server to implement api
// ✓ TODO: use redux-toolkit to implement state to fetch and update users, with redux thunk for async actions
// ✓ TODO: use redux slice to generate actions and reducers, create selectors to implement all the logic.
// ✓ TODO: do not use useState to store data locally, use redux store instead
// ✓ TODO: do not filter data locally, use redux selectors instead
// ✓ TODO: use nested selectors to filter data
// ✓ TODO: move all data-related logic (filtering) to redux store
// ✓ TODO: add logic to like user(s)
// ✓ TODO: add logic to delete user(s)
// ✓ TODO: add lotic to filter users
// ✓ TODO: do not focus on styling

const User = ({ user }: { user: UserType }) => {
  const dispatch: any = useDispatch()

  return (
    <li>
      <button onClick={ () => dispatch(deleteUser(user.id)) }>Delete</button>
      <button onClick={ () => dispatch(isLiked(user.id)) }>{ user.liked ? "🤎" : "🤍" }</button>
      <span>
        { user.firstName } { user.lastName } | { user.gender } | { user.eyeColor } | { user.age }
      </span>
    </li>
  )
}

export { User }