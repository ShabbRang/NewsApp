// import News from "./News";
import News from "./News";
import Authentication from "./Authentication";
import UserPreferences from "./components/UserPreferences";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="">
      {/* <News category="business" />
      <News category="sports" />
      <News category="politics" /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Authentication />} />
          <Route path="/preferences" element={<UserPreferences />} />
          <Route path="/home" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
