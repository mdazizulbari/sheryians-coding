import { useContext } from "react"
import UserDetail from "./UserDetail"
import {Link} from "react-router-dom"
// import { userContext } from "../Context/Context"

const User = () => {
// const x = useContext(userContext)
// console.log(x)

  return (
    <div>
     <h1>User List</h1>
     <div className="">
        <Link>User Name</Link>
     </div>
    </div>
  )
}
export default User