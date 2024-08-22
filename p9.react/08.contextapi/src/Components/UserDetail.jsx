import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  console.log(users[id]);
 const navigate = useNavigate() 


  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mt-10 text-5xl text-center text-red-600">
        Hi {users[id].name}!
      </h1>
      <h2 className="text-xl text-center">I know that you are from <br></br>{users[id].city}</h2>
      <button onClick={()=>navigate(-1)} className="w-fit px-4 py-2 rounded-full bg-yellow-200">Go Back</button>
    </div>
  );
};
export default UserDetail;
