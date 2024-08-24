import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full max-h-96 p-4 overflow-auto flex flex-wrap justify-center gap-4">
      {users.map((item, index) => {
        return <Card handleRemove={handleRemove} user={item} id={index} key={index} />;
      })}
    </div>
  );
};
export default Cards;
