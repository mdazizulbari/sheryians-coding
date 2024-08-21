const Card = ({ user, handleRemove, id }) => {
  return (
    <div className="w-52 h-full p-2 rounded-lg flex flex-col items-center bg-gray-100">
      <div className="w-[3vw] h-[3vw] rounded-full overflow-hidden bg-gray-200">
        <img className="w-full h-full object-cover" src={user.image} />
      </div>
      <h4 className="mt-1 text-xl font-semibold">{user.name}</h4>
      <h5 className="text-xs text-center font-semibold opacity-60">
        {user.email}
      </h5>
      <p className="mt-1 font-semibold text-center text-xs leading-1 tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore odio
        reprehenderit?
      </p>
      <button
        onClick={()=>handleRemove(id)}
        className="px-3 py-1 mt-4 text-xs text-white font-semibold rounded-xl bg-red-600"
      >
        Remove it
      </button>
    </div>
  );
};
export default Card;
