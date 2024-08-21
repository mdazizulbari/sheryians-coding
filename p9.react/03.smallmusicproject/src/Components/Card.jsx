const Card = ({ data, index, handleClick }) => {
  const { added, name, artist, image } = data;

  return (
    <div className="w-64 p-4 pb-10 mt-10 rounded-lg bg-gray-50 flex gap-4 relative">
      <div className="w-20 h-20 rounded-full bg-orange-500 overflow-hidden">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="text-xl leading-none font-semibold">{name}</div>
        <div className="text-xs mt-1">{artist}</div>
      </div>
      <div
        onClick={() => handleClick(index)}
        className={`px-4 py-3 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 whitespace-nowrap text-white text-xs rounded-full ${
          added === false ? "bg-orange-500" : "bg-teal-500"
        }`}
      >
        {added === false ? "Add to Favorites" : "Added"}
      </div>
    </div>
  );
};
export default Card;
