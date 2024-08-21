import Card from "./Card"

const Cards = ({users}) => {
  return (
    <div className="w-full max-h-96 p-4 overflow-auto flex flex-wrap justify-center gap-4">
        {users.map((item, index)=>{
        return <Card key={index}/>
        })}
    </div>
  )
}
export default Cards