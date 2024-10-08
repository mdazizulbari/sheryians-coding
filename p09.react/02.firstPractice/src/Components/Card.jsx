const Card = ({ values, handleFriendButton, index }) => {
  const { name, profession, image, friends } = values;
  return (
    <div className="w-52 rounded-xl overflow-hidden bg-white">
      <div className="w-full h-40 bg-blue-200">
        <img src={image} className=" w-full h-full object-top object-cover" />
      </div>
      <div className="w-full p-3">
        <h3 className="font-semibold text-xl">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button
          onClick={()=>handleFriendButton(index)}
          className={`px-3 py-1 my-3 text-xs text-white font-semibold rounded-lg ${friends ? "bg-green-600" : "bg-blue-600"}`}
        >
          {friends === true ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};
export default Card;
