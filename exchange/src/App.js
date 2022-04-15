import style from "./App.module.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/*  <Main />
      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
