import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount } from "./store/reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className=" container m-auto mt-5 p-10 bg-red-100">
      <h1 className="text-center text-3xl font-bold text-red-900">
        Counter: {value}
      </h1>
      <div className="text-center">
        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-2 runded text-red-900 border border-red-900 bg-transparent"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-5 py-2 mx-2 runded text-red-900 border border-red-900 bg-transparent"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementAsync(5))}
          className="px-5 py-2 runded text-red-900 border border-red-900 bg-transparent"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};
export default App;
