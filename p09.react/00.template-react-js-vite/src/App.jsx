import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import UrlNotFound from "./Components/urlNotFound";

const App = () => {
  return (
    <main className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<UrlNotFound />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </main>
  );
};
export default App;
