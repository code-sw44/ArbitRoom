import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import FAQ from "./components/Layout/FAQ/FAQ";
import Liquidity from "./components/Layout/Liquidity/Liquidity";
import "./style.scss";

// import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="page-content">
          <div className="content-wrap">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/liquidity" element={<Liquidity />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
