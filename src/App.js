import "./App.css";
import Navigation from "./components/Navigation";
import Film from "./components/Films";
import Footer from "./Footer";
// import Main from "./components/Main";
import Detail from "./components/Detail";
import { ThemeContext } from "./components/ThemeContext";
import { useContext } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Film />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>

        {/* <Route path='/contact' element={<Contact />}></Route> */}
        {/* <Route path='/trailer/:id' element={<Trailer />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
