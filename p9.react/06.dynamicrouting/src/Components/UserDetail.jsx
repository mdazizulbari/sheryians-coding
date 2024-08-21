import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const goBackHandler = ()=>{
        // navigate("/user")
        navigate(-1);
    }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="pb-20 text-white text-9xl text-center uppercase">Hello {name}!</h1>
      <button onClick={goBackHandler} className="w-64 p-3 mb-3 rounded-full text-xl text-center font-bold bg-blue-200 hover:bg-blue-600 hover:text-white">Go Back</button>
    </div>
  );
};
export default UserDetail;
