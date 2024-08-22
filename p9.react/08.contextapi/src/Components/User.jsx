import { useContext } from "react"
import UserDetail from "./UserDetail"
import {Link} from "react-router-dom"
import { UserContext } from "../Context/Context"

const User = () => {
const {users, setUsers}=useContext(UserContext)

  return (
    <div className="flex flex-col items-center justify-center">
     <h1 className="w-fit px-4 my-2 mb-10 rounded-full text-white text-5xl text-center bg-blue-600">User List</h1>
     <div className="flex gap-10">
      {users.map((u)=>
        <Link className="px-4 py-2 text-xl rounded-full bg-yellow-200" key={u.id} to={`/user/${u.id}`}>{u.name}</Link>
      ) }
     </div>
    </div>
  )
}
export default User