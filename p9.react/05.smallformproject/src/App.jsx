import Cards from "./Components/Cards"
import Form from "./Components/Form"

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards/>
        <Form/>
      </div>
    </div>
  )
}
export default App